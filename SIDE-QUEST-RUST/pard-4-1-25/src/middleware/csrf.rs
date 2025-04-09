use axum::{
    middleware::Next,
    response::{Response, IntoResponse, Html, Json},
    http::{Request, StatusCode, HeaderValue, HeaderMap, Method},
    body::Body,
};
use serde_json::json;

/// CSRF middleware for protecting against Cross-Site Request Forgery attacks
pub async fn csrf_middleware(
    request: Request<Body>,
    next: Next,
) -> Result<Response, StatusCode> {
    println!("csrf_middlewware ran");
    // Only verify CSRF token for unsafe methods
    if is_unsafe_method(request.method()) {
        // Check for CSRF token in headers
        let token = request
            .headers()
            .get("X-CSRF-Token")
            .and_then(|t| t.to_str().ok())
            .ok_or(StatusCode::FORBIDDEN)?;

        println!("is_unsafe_method true");

        // In a real implementation, verify the token against a stored value
        if token.is_empty() {
            println!("is_empty");
            return Err(StatusCode::FORBIDDEN);
        }
    }

    // Process the request
    let mut response = next.run(request).await;

    // Generate and add new CSRF token to response
    let new_token = generate_token();
    if let Ok(header_value) = HeaderValue::from_str(&new_token) {
        println!("let Ok");
        response.headers_mut().insert("X-CSRF-Token", header_value);
    }

    Ok(response)
}



/// Helper function to check if a method is unsafe (requires CSRF protection)
fn is_unsafe_method(method: &Method) -> bool {
    matches!(
        *method,
        Method::POST | Method::PUT | Method::DELETE | Method::PATCH
    )
}

/// Generate a new CSRF token
fn generate_token() -> String {
    use rand::{thread_rng, Rng};
    const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789";
    const TOKEN_LEN: usize = 32;

    let mut rng = thread_rng();

    let token: String = (0..TOKEN_LEN)
        .map(|_| {
            let idx = rng.gen_range(0..CHARSET.len());
            CHARSET[idx] as char
        })
        .collect();

    token
}


// =========================== TESTS ====================================

// 1. Test GET request - should receive CSRF token in response header
// pub async fn test_csrf_get() -> impl IntoResponse {
//     Html(r#"
//         <script>
//             // Function to extract header
//             function getCSRFToken() {
//                 const token = document.querySelector('meta[name="csrf-token"]')?.content;
//                 console.log('CSRF Token:', token);
//             }

//             // Function to make a test POST request
//             async function testPost() {
//                 const token = document.querySelector('meta[name="csrf-token"]')?.content;
//                 try {
//                     const response = await fetch('/test-csrf-post', {
//                         method: 'POST',
//                         headers: {
//                             'X-CSRF-Token': token,
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({ test: 'data' })
//                     });
//                     const result = await response.json();
//                     console.log('POST Result:', result);
//                 } catch (err) {
//                     console.error('Error:', err);
//                 }
//             }
//         </script>
//         <button onclick="getCSRFToken()">Show CSRF Token</button>
//         <button onclick="testPost()">Test POST with CSRF</button>
//     "#)
// }

pub async fn test_csrf_get() -> impl IntoResponse {
    let html = Html(r#"
        <!DOCTYPE html>
        <html>
        <head>
            <title>CSRF Test</title>
            <meta name="csrf-token" id="csrf-token">
        </head>
        <body>
            <div id="result"></div>
            <button id="showToken">Show CSRF Token</button>
            <button id="testPost">Test POST with CSRF</button>

            <script>
                // Load this from a separate file
                document.getElementById('showToken').addEventListener('click', async () => {
                    const response = await fetch('/test-csrf-debug');
                    const data = await response.json();
                    document.getElementById('result').textContent =
                        JSON.stringify(data, null, 2);
                });

                document.getElementById('testPost').addEventListener('click', async () => {
                    const token = document.getElementById('csrf-token').content;
                    try {
                        const response = await fetch('/test-csrf-post', {
                            method: 'POST',
                            headers: {
                                'X-CSRF-Token': token,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ test: 'data' })
                        });
                        const result = await response.json();
                        document.getElementById('result').textContent =
                            JSON.stringify(result, null, 2);
                    } catch (err) {
                        document.getElementById('result').textContent =
                            'Error: ' + err.message;
                    }
                });
            </script>
        </body>
        </html>
    "#);

    html
}


// 2. Test POST endpoint
pub async fn test_csrf_post() -> impl IntoResponse {
    Json(json!({ "message": "POST successful" }))
}


// You can also add a debug route to inspect the CSRF state:
pub async fn debug_csrf(
    request: Request<Body>,
) -> impl IntoResponse {
    let headers = request.headers();
    let csrf_header = headers.get("X-CSRF-Token")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("No CSRF header");

    Json(json!({
        "csrf_header": csrf_header,
        "method": request.method().as_str(),
    }))
}
