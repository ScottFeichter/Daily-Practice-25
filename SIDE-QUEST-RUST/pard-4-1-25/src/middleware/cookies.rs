use tower_cookies::{CookieManagerLayer, Cookies, Cookie, Key};
use axum::{response::IntoResponse, Json};
use serde_json::json;

/// Adds a signed cookie
pub fn set_jwt_cookie(cookies: &Cookies, token: &str) {
    let mut cookie = Cookie::build("jwt", token.to_string())
        .path("/")
        .http_only(true)
        .secure(true)
        .finish();

    cookies.add(cookie);
}

/// Retrieves JWT from cookie
pub fn set_jwt_cookie(cookies: &Cookies, token: &str) {
    let mut cookie = Cookie::new("jwt", token.to_string());
    cookie.set_path("/");
    cookie.set_http_only(true);
    cookie.set_secure(true);

    cookies.add(cookie);
}


/// Example protected route using the jwt cookie
pub async fn protected_route(cookies: Cookies) -> impl IntoResponse {
    match get_jwt_cookie(&cookies) {
        Some(token) => Json(json!({
            "success": true,
            "token": token
        })),
        None => Json(json!({
            "success": false,
            "message": "Unauthorized"
        })).into_response(),
    }
}

/// Expose cookie middleware layer
pub fn cookie_layer() -> CookieManagerLayer {
    CookieManagerLayer::new()
}
