use axum::{
    Router,
    routing::{post, get},
    middleware,
};
use std::sync::Arc;
use diesel::PgConnection;
use crate::{
    services::authentication_service::AuthenticationService,
    handlers::authentication_handlers::*,
    middleware::{
        authentication_middleware::authentication_middleware,
        cookies::cookie_layer,
    },
    AppState,
    config::Config,
};

pub fn authentication_routes(
    config: &Config,
    pool: diesel::r2d2::Pool<diesel::r2d2::ConnectionManager<PgConnection>>
) -> Router<Arc<AppState>> {
    let authentication_service = Arc::new(AuthenticationService::new(config, pool));

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
