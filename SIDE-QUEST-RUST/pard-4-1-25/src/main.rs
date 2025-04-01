use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager, Pool};
use dotenvy::dotenv;
use std::sync::Arc;

mod db;
mod config;

use config::Config;

use axum::{
    routing::{get, post},
    Router,
    extract::State,
};
use std::net::SocketAddr;

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

#[tokio::main]
async fn main() {
    // Load .env file
    dotenv().ok();

    // Access environment variables
    let config: Config = Config::new().expect("Failed to load configuration");

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

    // Build our application with routes
    let app = Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .with_state(shared_state);

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
