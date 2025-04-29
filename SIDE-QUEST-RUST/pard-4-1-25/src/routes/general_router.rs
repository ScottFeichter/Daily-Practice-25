// routes/general.rs
use axum::{ routing::{ get, post }, Router, extract::{ Json, State }, response::IntoResponse };
use std::sync::Arc;
use crate::{
    AppState,
    handlers::general_handlers::*,
    models::{ ApiResponse, TestRequest }, errors::AppError
};

pub fn general_routes() -> Router<Arc<AppState>> {
    Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .route("/test", post(test_handler))
        .route("/error", get(error_handler))
        .fallback(handler_404)
}


