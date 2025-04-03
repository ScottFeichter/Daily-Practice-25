use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager, Pool};
use dotenvy::dotenv;
use std::sync::Arc;

mod db;
mod config;

use config::Config;

use axum::{
    middleware::from_fn,
    routing::{get, post},
    Router,
    extract::State,
    http::{Method, HeaderName, header, HeaderValue},
};
use std::net::SocketAddr;

use tower_http::cors::{CorsLayer, Any};


#[macro_use]
extern crate diesel;
pub mod models;
pub mod schema;

// Define AppState to hold shared state
pub struct AppState {
    pub db_pool: Pool<ConnectionManager<PgConnection>>,
}

// Create a type alias for convenience
type AppStateShare = Arc<AppState>;

mod middleware;
use middleware::csrf::csrf_middleware;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Load .env file
    dotenv().ok();

    // Access environment variables
    let config: Config = Config::new().expect("Failed to load configuration");

    // Get environment
    let environment = std::env::var("ENVIRONMENT").unwrap_or_else(|_| "development".to_string());


    println!("environment: {:?}", environment);


    // Configure CORS based on environment
    let cors = if environment == "production" {
        CorsLayer::new()
            .allow_origin("https://your-production-domain.com".parse::<HeaderValue>().unwrap())
            .allow_methods([Method::GET, Method::POST, Method::PATCH, Method::DELETE])
            .allow_headers([
                HeaderName::from_static("content-type"),
                HeaderName::from_static("authorization"),
            ])
            .allow_credentials(true)
    } else {
        // Development CORS settings
        CorsLayer::new()
            .allow_origin("http://127.0.0.1:5678".parse::<HeaderValue>().unwrap())
            .allow_methods([
                Method::GET,
                Method::POST,
                Method::PATCH,
                Method::DELETE,
                Method::OPTIONS,
            ])
            .allow_headers([
                HeaderName::from_static("content-type"),
                HeaderName::from_static("authorization"),
                HeaderName::from_static("accept"),
            ])
            .allow_credentials(true)
    };


    // Set up connection pool
    let manager = ConnectionManager::<PgConnection>::new(&config.database_url);
    let pool = Pool::builder()
        .build(manager)
        .expect("Failed to create pool");

    // Create shared state
    let shared_state = Arc::new(AppState {
        db_pool: pool,
    });

    // Initialize tracing for logging
    tracing_subscriber::fmt::init();

    // Build our application with routes and add CORS
    let app = Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .with_state(shared_state)
        .layer(cors)
        .layer(from_fn(csrf_middleware));  // Add the CORS middleware here

    // Run the server
    let addr = SocketAddr::from(([127, 0, 0, 1], 5678));
    println!("Server running on http://{}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app.into_make_service())
        .await
        .unwrap();
}

// Example of a handler using state
async fn root(State(state): State<AppStateShare>) -> &'static str {
    // You can now use state.db_pool to get a connection when needed
    "Hello, World!"
}

// Health check endpoint
async fn health_check() -> &'static str {
    "OK"
}
