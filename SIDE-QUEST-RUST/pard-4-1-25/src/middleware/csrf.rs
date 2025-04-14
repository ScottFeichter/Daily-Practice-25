use axum::{
    middleware::Next,
    response::{Response, IntoResponse, Html, Json},
    http::{Request, StatusCode, HeaderValue, Method, HeaderName},
    body::Body,
    extract::Extension,
};
use serde_json::json;
use ring::rand::{SystemRandom, SecureRandom};
use base64::{Engine as _, engine::general_purpose::URL_SAFE};
use time::{Duration, OffsetDateTime};
use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;




/// Helper function to check if a method is unsafe (requires CSRF protection)
fn is_unsafe_method(method: &Method) -> bool {
    matches!(
        *method,
        Method::POST | Method::PUT | Method::DELETE | Method::PATCH
    )
}

/// Generate a new CSRF token
fn generate_secure_token() -> String {
    let mut key_bytes = [0u8; 32];
    let system_random = SystemRandom::new();
    system_random
        .fill(&mut key_bytes)
        .expect("Failed to generate random bytes");
    URL_SAFE.encode(key_bytes)
}

// For making csrf tokens expirable
#[derive(Clone, Serialize, Deserialize)]
struct TokenData {
    token: String,
    expires_at: OffsetDateTime,
}

impl TokenData {
    fn new() -> Self {
        Self {
            token: generate_secure_token(),
            expires_at: OffsetDateTime::now_utc() + Duration::minutes(30),
        }
    }

    fn is_valid(&self) -> bool {
        OffsetDateTime::now_utc() < self.expires_at
    }
}

// Our token storage
pub struct TokenStore {
    tokens: Arc<RwLock<HashMap<String, TokenData>>>
}

impl TokenStore {
    pub fn new() -> Self {
        Self {
            tokens: Arc::new(RwLock::new(HashMap::new()))
        }
    }

    pub async fn generate_token(&self) -> String {
        let token_data = TokenData::new();
        let token = token_data.token.clone();
        self.store_token(token_data).await;
        token
    }

    pub async fn store_token(&self, token_data: TokenData) {
        let mut tokens = self.tokens.write().await;
        tokens.insert(token_data.token.clone(), token_data);
        // Clean up expired tokens
        tokens.retain(|_, data| data.is_valid());
    }

    pub async fn validate_token(&self, token: &str) -> bool {
        let tokens = self.tokens.read().await;
        tokens
            .get(token)
            .map(|data| data.is_valid())
            .unwrap_or(false)
    }

    pub async fn cleanup_expired(&self) {
        let mut tokens = self.tokens.write().await;
        tokens.retain(|_, data| data.is_valid());
    }
}

impl Default for TokenStore {
    fn default() -> Self {
        Self::new()
    }
}

pub async fn csrf_middleware(
    Extension(token_store): Extension<Arc<TokenStore>>,
    mut request: Request<Body>,
    next: Next,
) -> Result<Response, StatusCode> {
    tracing::debug!("CSRF Middleware - Method: {:?}", request.method());
    tracing::debug!("CSRF Middleware - Headers: {:?}", request.headers());

    if is_unsafe_method(request.method()) {
        match request.headers().get("x-csrf-token") {
            Some(token) => {
                if let Ok(token_str) = token.to_str() {
                    tracing::debug!("Received CSRF token: {}", token_str);
                    if !token_store.validate_token(token_str).await {
                        tracing::error!("Invalid CSRF token");
                        return Err(StatusCode::FORBIDDEN);
                    }
                    tracing::debug!("CSRF token validated successfully");
                } else {
                    tracing::error!("Invalid CSRF token format");
                    return Err(StatusCode::FORBIDDEN);
                }
            }
            None => {
                tracing::error!("No CSRF token provided in headers");
                return Err(StatusCode::FORBIDDEN);
            }
        }
    }

    let response = next.run(request).await;

    // Add new CSRF token to response
    let mut response = response.into_response();
    let new_token = token_store.generate_token().await;

    if let Ok(token_value) = HeaderValue::from_str(&new_token) {
        response.headers_mut().insert(
            HeaderName::from_static("x-csrf-token"),
            token_value
        );
    }

    Ok(response)
}

// Test endpoints
pub async fn test_csrf_get() -> impl IntoResponse {
    let html = Html(r#"
        <!DOCTYPE html>
        <html>
        <head>
            <title>CSRF Test</title>
            <meta name="csrf-token" id="csrf-token" content="">
        </head>
        <body>
            <div id="result"></div>
            <button id="showToken">Show CSRF Token</button>
            <button id="testPost">Test POST with CSRF</button>

            <script src="/static/js/csrf-test.js"></script>
        </body>
        </html>
    "#);

    html
}

pub async fn test_csrf_post(
    Extension(token_store): Extension<Arc<TokenStore>>,
    request: Request<Body>,
) -> impl IntoResponse {
    let headers = request.headers();

    let csrf_token = headers
        .get("x-csrf-token")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("No CSRF token found");

    tracing::debug!("POST request received with token: {}", csrf_token);

    let response = Json(json!({
        "message": "POST successful",
        "csrf_token_received": csrf_token,
        "method": request.method().as_str(),
        "headers": headers.iter()
            .map(|(name, value)| (
                name.as_str(),
                value.to_str().unwrap_or("Invalid header value")
            ))
            .collect::<HashMap<_, _>>()
    }));

    (StatusCode::OK, response)
}

pub async fn debug_csrf(
    request: Request<Body>,
) -> impl IntoResponse {
    let headers = request.headers();

    Json(json!({
        "message": "CSRF token not required for GET requests",
        "method": request.method().as_str(),
        "all_headers": headers.iter()
            .map(|(name, value)| (
                name.as_str(),
                value.to_str().unwrap_or("Invalid header value")
            ))
            .collect::<HashMap<_, _>>(),
        "note": "CSRF tokens are only required for POST, PUT, DELETE, and PATCH requests"
    }))
}






pub async fn get_csrf_token(
    Extension(token_store): Extension<Arc<TokenStore>>
) -> impl IntoResponse {
    let token = token_store.generate_token().await;
    let mut map = HashMap::new();
    map.insert("csrf_token".to_string(), token);
    Json(map)
}
