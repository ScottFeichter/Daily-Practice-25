mod config;
mod middleware;
mod routes;
mod errors;
pub mod models;
pub mod schema;
pub mod db;

use std::{sync::Arc, error::Error as StdError, net::SocketAddr};
use dotenvy::dotenv;
use diesel::{prelude::*, r2d2::{ConnectionManager, Pool}};
use axum::{
    middleware::from_fn,
    routing::{get, post},
    Router,
    extract::Extension,
};
use tower_http::{trace::TraceLayer, services::ServeDir};
use tracing_subscriber;
use config::Config;
use middleware::{
    cors::{create_cors_layer, Environment},
    csrf::{csrf_middleware, test_csrf_get, test_csrf_post, debug_csrf, TokenStore, get_csrf_token},
    cookies::{cookie_layer, protected_route, test_set_jwt, test_get_jwt},
    security_headers::security_headers
 };
use routes::{
    api::users::user_routes,
    general::general_routes,
};



// Define the application state
pub struct AppState {
    pub db_pool: Pool<ConnectionManager<PgConnection>>,
}


#[tokio::main]
async fn main() -> Result<(), Box<dyn StdError>> {


    // Load .env file
    dotenv().ok();

    // Access environment variables
    let config: Config = Config::new().expect("Failed to load configuration");

    // Get environment
    let environment: String = std::env::var("ENVIRONMENT").unwrap_or_else(|_| "development".to_string());
    tracing::info!("environment: {}", environment);

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

    // Create token store
    let token_store = Arc::new(TokenStore::new());
    let token_store_layer = Extension(token_store);

    // Build our application with routes and add middleware
    let app: Router = Router::new()
        .merge(user_routes())
        .merge(general_routes())
        .nest_service("/static", ServeDir::new("static"))
        .route("/test-csrf-get", get(test_csrf_get))
        .route("/test-csrf-post", post(test_csrf_post))
        .route("/test-csrf-debug", get(debug_csrf))
        .route("/test/set-jwt", get(test_set_jwt))
        .route("/test/get-jwt", get(test_get_jwt))
        .route("/protected", get(protected_route))
        .route("/csrf-token", get(get_csrf_token))
        .with_state(shared_state)
        .layer(from_fn(csrf_middleware))
        .layer(token_store_layer)  // Add TokenStore as an extension
        .layer(create_cors_layer(Environment::Development))
        .layer(cookie_layer())
        .layer(from_fn(security_headers))
        .layer(TraceLayer::new_for_http());

    // Run the server
    let addr: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 5678));
    tracing::info!("Server running on http://{}", addr);


    // Create the listener
    let listener: tokio::net::TcpListener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app.into_make_service())
        .await?;


    Ok(())
}
