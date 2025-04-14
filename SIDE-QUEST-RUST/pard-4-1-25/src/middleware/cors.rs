use axum::{
    http::{HeaderName, HeaderValue, Method},
    http::header::CONTENT_TYPE,
};
use tower_http::cors::CorsLayer;

#[derive(Debug)]
pub enum Environment {
    Development,
    Production,
    Test,
}

pub fn create_cors_layer(environment: Environment) -> CorsLayer {
    match environment {
        Environment::Production => {
            CorsLayer::new()
                .allow_origin("https://your-production-domain.com".parse::<HeaderValue>().unwrap())
                .allow_methods([
                    Method::GET,
                    Method::POST,
                    Method::PATCH,
                    Method::DELETE,
                ])
                .allow_headers([
                    CONTENT_TYPE,
                    HeaderName::from_static("authorization"),
                    HeaderName::from_static("x-csrf-token"),
                ])
                .expose_headers([HeaderName::from_static("x-csrf-token")])
                .allow_credentials(true)
        }
        Environment::Development => {
            CorsLayer::new()
                .allow_origin("http://127.0.0.1:5678".parse::<HeaderValue>().unwrap())
                .allow_methods([
                    Method::GET,
                    Method::POST,
                    Method::PATCH,
                    Method::DELETE,
                    Method::OPTIONS,
                ])
                .allow_headers([
                    CONTENT_TYPE,
                    HeaderName::from_static("authorization"),
                    HeaderName::from_static("accept"),
                    HeaderName::from_static("x-csrf-token"),
                ])
                .expose_headers([HeaderName::from_static("x-csrf-token")])
                .allow_credentials(true)
        }
        Environment::Test => {
            CorsLayer::new()
                .allow_origin("*".parse::<HeaderValue>().unwrap())
                .allow_methods([Method::GET, Method::POST])
                .allow_headers([
                    CONTENT_TYPE,
                    HeaderName::from_static("x-csrf-token"),
                ])
                .expose_headers([HeaderName::from_static("x-csrf-token")])
        }
    }
}
