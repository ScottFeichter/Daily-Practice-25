use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager, Pool};
use dotenvy::dotenv;
use std::sync::Arc;

mod db;
mod config;

use config::Config;

use axum::{
    middleware::from_fn,
    routing::get,
    Router,
    extract::{State},
    response::{AppendHeaders, IntoResponse},
    http::{Method, HeaderName, HeaderValue, header},
};
use std::net::SocketAddr;

use tower_http::cors::CorsLayer;

use std::error::Error as StdError;


mod middleware;
use middleware::cors::create_cors_layer;
use middleware::csrf::csrf_middleware;
use middleware::cookies::{cookie_layer, protected_route};


#[macro_use]
extern crate diesel;
pub mod models;
pub mod schema;

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

    // Create Cors layer
    let cors: CorsLayer = create_cors_layer(&environment);

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

    // Build our application with routes and add middleware
    let app: Router = Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .route("/protected", get(protected_route))
        .with_state(shared_state)
        .layer(cors)
        .layer(cookie_layer())
        .layer(from_fn(csrf_middleware));

    // Run the server
    let addr: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 5678));
    println!("Server running on http://{}", addr);

    // Create the listener
    let listener: tokio::net::TcpListener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app.into_make_service())
        .await?;

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
