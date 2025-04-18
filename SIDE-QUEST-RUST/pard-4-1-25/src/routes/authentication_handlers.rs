use axum::{
    extract::State,
    response::IntoResponse,
    Json,
    http::StatusCode,
    Extension,
};
use tower_cookies::Cookies;
use std::sync::Arc;
use serde_json::json;

use crate::{
    services::authentication_service::AuthenticationService,
    services::database::Database,
    models::user::{User, LoginRequest},
    middleware::cookies::{set_access_token, set_refresh_token},
    config::Config,
};

pub async fn login_handler(
    State(authentication_service): State<Arc<AuthenticationService>>,
    State(db): State<Arc<Database>>,
    cookies: Cookies,
    config: Extension<Config>,
    Json(credentials): Json<LoginRequest>,
) -> impl IntoResponse {
    match db.validate_user_credentials(&credentials.username, &credentials.password).await {
        Ok(user) => {
            // Convert i32 to string for token generation
            let user_id = user.id.to_string();
            match authentication_service.generate_access_token(&user_id) {
                Ok(access_token) => {
                    match authentication_service.generate_refresh_token(&user_id) {
                        Ok(refresh_token) => {
                            set_access_token(&cookies, access_token, &config);
                            set_refresh_token(&cookies, refresh_token, &config);

                            (
                                StatusCode::OK,
                                Json(json!({
                                    "status": "success",
                                    "message": "Successfully logged in",
                                    "user": {
                                        "id": user.id,
                                        "username": user.username,
                                        "name": user.name,
                                        "email": user.email
                                    }
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
        },
        Err(_) => (
            StatusCode::UNAUTHORIZED,
            Json(json!({
                "status": "error",
                "message": "Invalid username or password"
            }))
        )
    }
}

#[debug_handler]
pub async fn refresh_token_handler(
    State(authentication_service): State<Arc<AuthenticationService>>,
    cookies: Cookies,
    config: Extension<Config>,
) -> impl IntoResponse {
    match get_refresh_token(&cookies) {
        Some(refresh_token) => {
            match authentication_service.verify_refresh_token(&refresh_token) {
                Ok(claims) => {
                    match authentication_service.generate_access_token(&claims.sub) {
                        Ok(new_access_token) => {
                            set_access_token(&cookies, new_access_token, &config);
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
