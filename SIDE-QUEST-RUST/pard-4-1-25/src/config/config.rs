use serde::Deserialize;
use std::env::{self, VarError};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ConfigError {
    #[error("Environment variable error: {0}")]
    EnvVar(#[from] VarError),
    #[error("{0}")]
    Other(String),
}

#[derive(Debug, Deserialize)]
pub struct Config {
    pub database_url: String,
    pub jwt_secret: String,
    pub rust_log: String,
    pub jwt_expires_in: String,
    pub schema: String,
}

impl Config {
    pub fn new() -> Result<Self, ConfigError> {
        Ok(Config {
            database_url: env::var("DATABASE_URL")
                .map_err(|_| ConfigError::Other("DATABASE_URL must be set".to_string()))?,

            jwt_secret: env::var("JWT_SECRET")
                .map_err(|_| ConfigError::Other("JWT_SECRET must be set".to_string()))?,

            rust_log: env::var("RUST_LOG")
                .map_err(|_| ConfigError::Other("RUST_LOG must be set".to_string()))?,

            jwt_expires_in: env::var("JWT_EXPIRES_IN")
                .map_err(|_| ConfigError::Other("JWT_EXPIRES_IN must be set".to_string()))?,

            schema: env::var("SCHEMA")
                .map_err(|_| ConfigError::Other("SCHEMA must be set".to_string()))?,
        })
    }
}
