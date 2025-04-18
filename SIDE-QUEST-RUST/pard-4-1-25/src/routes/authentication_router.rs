use axum::{
    Router,
    routing::{post, get},
    response::IntoResponse,
    Json,
    middleware,
};
use std::sync::Arc;
use serde_json::json;

use crate::{
    services::authentication_service::AuthenticationService,
    routes::authentication_handlers::{login_handler, refresh_token_handler, logout_handler},
    middleware::{
        authentication_middleware::authentication_middleware,
        cookies::cookie_layer,
    },
    AppState,
    config::Config,
};

pub fn authentication_routes(config: &Config) -> Router<Arc<AppState>> {
    let authentication_service = Arc::new(AuthenticationService::new(config));

    // Create protected routes
    let protected_routes = Router::new()
        .route("/protected", get(protected_handler))
        .route("/refresh", post(refresh_token_handler))
        .route("/logout", post(logout_handler))
        .layer(middleware::from_fn_with_state(
            authentication_service.clone(),
            authentication_middleware
        ));

    // Combine with public routes
    Router::new()
        .route("/login", post(login_handler))
        .merge(protected_routes)
        .with_state(authentication_service)
        .layer(cookie_layer())
}

// Keep the protected handler function
async fn protected_handler() -> impl IntoResponse {
    (
        axum::http::StatusCode::OK,
        Json(json!({ "message": "This is a protected route" }))
    )
}
