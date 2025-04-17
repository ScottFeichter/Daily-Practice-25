use axum::{
    middleware::Next,
    response::{Response, IntoResponse}, // Added IntoResponse here
    extract::State,
    http::{Request, StatusCode},
    body::Body,
    Json,
};
use std::sync::Arc;
use tower_cookies::Cookies;
use serde_json::json;

use crate::{
    services::authentication_service::AuthenticationService,
    middleware::cookies::get_access_token,
};

pub async fn authentication_middleware(
    cookies: Cookies,
    State(auth_service): State<Arc<AuthenticationService>>,
    req: Request<Body>,
    next: Next,
) -> Response {
    // Get access token from cookies
    let access_token = match get_access_token(&cookies) {
        Some(token) => token,
        None => {
            return (
                StatusCode::UNAUTHORIZED,
                Json(json!({
                    "status": "error",
                    "message": "No access token provided"
                }))
            ).into_response()
        }
    };

    // Verify the access token
    match auth_service.verify_access_token(&access_token) {
        Ok(_claims) => {
            // Token is valid, continue to the next middleware/handler
            next.run(req).await
        },
        Err(_) => {
            // Token is invalid
            (
                StatusCode::UNAUTHORIZED,
                Json(json!({
                    "status": "error",
                    "message": "Invalid access token"
                }))
            ).into_response()
        }
    }
}
