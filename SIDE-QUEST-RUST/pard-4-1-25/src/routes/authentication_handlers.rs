use axum_macros::debug_handler;
use axum::{
    extract::State,
    response::{IntoResponse, Response},
    Json,
    http::StatusCode,
    body::Body,
};
use tower_cookies::Cookies;
use serde::Deserialize;
use std::sync::Arc;
use serde_json::json;

use crate::{
    services::authentication_service::AuthenticationService,
    middleware::cookies::{
        set_access_token,
        set_refresh_token,
        get_refresh_token,
        remove_auth_cookies
    },
};

#[derive(Deserialize)]
pub struct LoginRequest {
    username: String,
    password: String,
}

#[debug_handler] // Add this attribute to help with debugging
pub async fn login_handler(
    State(auth_service): State<Arc<AuthenticationService>>,
    cookies: Cookies,
    Json(credentials): Json<LoginRequest>,
) -> impl IntoResponse {
    let user_id = "user123".to_string();

    match auth_service.generate_access_token(&user_id) {
        Ok(access_token) => {
            match auth_service.generate_refresh_token(&user_id) {
                Ok(refresh_token) => {
                    set_access_token(&cookies, access_token);
                    set_refresh_token(&cookies, refresh_token);

                    (
                        StatusCode::OK,
                        Json(json!({
                            "status": "success",
                            "message": "Successfully logged in"
                        }))
                    )
                },
                Err(_) => (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    Json(json!({
                        "status": "error",
                        "message": "Failed to generate refresh token"
                    }))
                )
            }
        },
        Err(_) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(json!({
                "status": "error",
                "message": "Failed to generate access token"
            }))
        )
    }
}

#[debug_handler]
pub async fn refresh_token_handler(
    State(auth_service): State<Arc<AuthenticationService>>,
    cookies: Cookies,
) -> impl IntoResponse {
    match get_refresh_token(&cookies) {
        Some(refresh_token) => {
            match auth_service.verify_refresh_token(&refresh_token) {
                Ok(claims) => {
                    match auth_service.generate_access_token(&claims.sub) {
                        Ok(new_access_token) => {
                            set_access_token(&cookies, new_access_token);
                            (
                                StatusCode::OK,
                                Json(json!({
                                    "status": "success",
                                    "message": "Access token refreshed"
                                }))
                            )
                        },
                        Err(_) => (
                            StatusCode::INTERNAL_SERVER_ERROR,
                            Json(json!({
                                "status": "error",
                                "message": "Failed to generate new access token"
                            }))
                        )
                    }
                },
                Err(_) => (
                    StatusCode::UNAUTHORIZED,
                    Json(json!({
                        "status": "error",
                        "message": "Invalid refresh token"
                    }))
                )
            }
        },
        None => (
            StatusCode::UNAUTHORIZED,
            Json(json!({
                "status": "error",
                "message": "No refresh token found"
            }))
        )
    }
}

#[debug_handler]
pub async fn logout_handler(cookies: Cookies) -> impl IntoResponse {
    remove_auth_cookies(&cookies);
    (
        StatusCode::OK,
        Json(json!({
            "status": "success",
            "message": "Successfully logged out"
        }))
    )
}
