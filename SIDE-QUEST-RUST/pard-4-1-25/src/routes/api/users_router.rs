use std::sync::Arc;
use axum::{
    routing::{ get, patch },
    Router
};
use crate::{
    AppState,
    handlers::users_handlers::*,
};

// USER ROUTER
pub fn user_routes() -> Router<Arc<AppState>> {
    Router::new()
        .route("/users", get(get_users).post(create_user_handler))
        .route(
            "/users/{id}",
            patch(update_user_handler).get(get_user_by_id).delete(delete_user_handler)
        )
}
