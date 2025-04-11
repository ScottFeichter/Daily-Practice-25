use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager, Pool};
use dotenvy::dotenv;
use std::sync::Arc;

mod config;

use config::Config;

use axum::{
    middleware::from_fn,
    routing::{get, post, put, patch, delete},
    Router,
    extract::{State, Json, Extension},
    response::{AppendHeaders, IntoResponse, Json as JsonResponse},
    http::{Method, HeaderName, HeaderValue, header},
};
use std::net::SocketAddr;

use tracing::{info, error};

use tracing_subscriber;
use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;
use tower_http::services::ServeDir;
use tower_http::add_extension::AddExtensionLayer;
use tower::ServiceBuilder;
use axum::http::header::CONTENT_TYPE;
// use tower_http::services::fs::ServeFileConfig;

use std::error::Error as StdError;

mod middleware;
use middleware::cors::create_cors_layer;
use middleware::csrf::{csrf_middleware, test_csrf_get, test_csrf_post, debug_csrf, TokenStore};
use middleware::cookies::{cookie_layer, protected_route, test_set_jwt, test_get_jwt};
use middleware::security_headers::security_headers;

mod routes;
use routes::{user_routes};

#[macro_use]
extern crate diesel;
pub mod models;
pub mod schema;
pub mod db;

pub fn seed_database() -> Result<(), Box<dyn std::error::Error>> {
    // use diesel::prelude::*;
    // use dotenvy::dotenv;
    use std::env;
    use crate::db::seeders::DatabaseSeeder;

    dotenv().ok();
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    let mut conn = PgConnection::establish(&database_url)
        .expect("Error connecting to database");

    let conn_static = Box::leak(Box::new(conn));

    let mut seeder = DatabaseSeeder::new(conn_static);

    match seeder.run() {
        Ok(_) => println!("Database seeded successfully!"),
        Err(e) => {
            eprintln!("Error seeding database: {}", e);
            return Err(Box::new(e));
        }
    }

    Ok(())
}

// Define the application state
pub struct AppState {
    pub db_pool: Pool<ConnectionManager<PgConnection>>,
}

// Type alias for shared state
type AppStateShare = Arc<AppState>;

#[tokio::main]
async fn main() -> Result<(), Box<dyn StdError>> {
    // Load .env file
    dotenv().ok();

    // Access environment variables
    let config: Config = Config::new().expect("Failed to load configuration");

    // Get environment
    let environment: String = std::env::var("ENVIRONMENT").unwrap_or_else(|_| "development".to_string());
    println!("environment: {:?}", environment);



    // Set up connection pool
    let manager: ConnectionManager<PgConnection> = ConnectionManager::<PgConnection>::new(&config.database_url);
    let pool: Pool<ConnectionManager<PgConnection>> = Pool::builder()
        .build(manager)
        .expect("Failed to create pool");


    // Create shared state
    let shared_state: Arc<AppState> = Arc::new(AppState {
        db_pool: pool,
    });

    // Initialize tracing for logging
    tracing_subscriber::fmt::init();

    // Create Cors layer
    let cors = CorsLayer::new()
    .allow_origin("*".parse::<HeaderValue>().unwrap())
    .allow_methods([Method::GET, Method::POST])
    .allow_headers([
        CONTENT_TYPE,
        HeaderName::from_static("x-csrf-token")
    ])
    .expose_headers([HeaderName::from_static("x-csrf-token")]);


    // Create token store
    let token_store = Arc::new(TokenStore::new());
    let token_store_layer = Extension(token_store);



    // Build our application with routes and add middleware
    let app: Router = Router::new()
        .merge(user_routes())
        .nest_service("/static", ServeDir::new("static"))
        .route("/", get(root))
        .route("/health", get(health_check))
        .route("/test-csrf-get", get(test_csrf_get))
        .route("/test-csrf-post", post(test_csrf_post))
        .layer(
            ServiceBuilder::new()
                .layer(TraceLayer::new_for_http())
                .layer(
                    CorsLayer::new()
                        .allow_origin("*".parse::<HeaderValue>().unwrap())
                        .allow_methods([Method::GET, Method::POST])
                        .allow_headers([CONTENT_TYPE, HeaderName::from_static("x-csrf-token")])
                )
        )
        .route("/test-csrf-debug", get(debug_csrf))
        .route("/test/set-jwt", get(test_set_jwt))
        .route("/test/get-jwt", get(test_get_jwt))
        .route("/protected", get(protected_route))
        .with_state(shared_state)
        .layer(from_fn(csrf_middleware))
        .layer(token_store_layer)  // Add TokenStore as an extension
        .layer(cors)
        .layer(cookie_layer())
        .layer(from_fn(security_headers));



    // Run the server
    let addr: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 5678));
    println!("Server running on http://{}", addr);

    // Create the listener
    let listener: tokio::net::TcpListener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app.into_make_service())
        .await?;

    // To run the seeder, you can either:
    // 1. Call it directly:
    // seed_database().unwrap();

    // 2. Or use a command-line argument to determine when to seed:

    if std::env::args().any(|arg| arg == "--seed") {
        println!("Starting database seeding...");  // Add this for debugging
        match seed_database() {
            Ok(_) => println!("Seeding completed successfully"),
            Err(e) => eprintln!("Seeding failed: {}", e),
        }
    }


    Ok(())
}

// Example of a handler using state
async fn root(_state: State<AppStateShare>) -> &'static str {
    "Hello, World!"
}

// Health check endpoint
async fn health_check() -> &'static str {
    "OK"
}
