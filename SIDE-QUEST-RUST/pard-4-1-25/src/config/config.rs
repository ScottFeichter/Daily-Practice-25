use serde::Deserialize;                             // Convert from JSON to whatever it is supposed to be to be readable
use std::env::{self, VarError};                     // Brings the .env in to scope
use thiserror::Error;                               // The error object enum for handling errors

#[derive(Error, Debug)]                             // Decorating saying the next thing below we want to use debug and error handling
pub enum ConfigError {                              // Configuring Error if there is an error loading the environment variables
    #[error("Environment variable error: {0}")]     // Decorator
    EnvVar(#[from] VarError),                       // VarError from imported crate EnvVar is a type we created for enum
    #[error("{0}")]                                 // Decorator
    Other(String),                                  // The other possibility if a different type of error
}

#[derive(Debug, Deserialize, Clone)]                       // Decorator
pub struct Config {                                 // Declaring the type of the variables publicly
    pub database_url: String,
    pub jwt_access_secret: String,
    pub jwt_refresh_secret: String,
    pub rust_log: String,
    pub jwt_access_expires_in: i64,
    pub jwt_refresh_expires_in: i64,
    pub schema: String,
}

impl Config {                                      // Implementation to add methods on the Config struct
    pub fn new() -> Result<Self, ConfigError> {    // The method new() returning Result of OK (the info from .env) or the ConfigError
        Ok(Config {
            database_url: env::var("DATABASE_URL")
                .map_err(|_| ConfigError::Other("DATABASE_URL must be set".to_string()))?, // The ? error handler only usable for an option

            jwt_access_secret: env::var("JWT_ACCESS_SECRET")
                .map_err(|_| ConfigError::Other("JWT_ACCESS_SECRET must be set".to_string()))?,

            jwt_refresh_secret: env::var("JWT_REFRESH_SECRET")
                .map_err(|_| ConfigError::Other("JWT_REFRESH_SECRET must be set".to_string()))?,

            rust_log: env::var("RUST_LOG")
                .map_err(|_| ConfigError::Other("RUST_LOG must be set".to_string()))?,

            jwt_access_expires_in: env::var("JWT_ACCESS_EXPIRES_IN")
                .map_err(|_| ConfigError::Other("JWT_ACCESS_EXPIRES_IN must be set".to_string()))?
                .parse()
                .map_err(|_| ConfigError::Other("JWT_ACCESS_EXPIRES_IN must be a valid number".to_string()))?,

            jwt_refresh_expires_in: env::var("JWT_REFRESH_EXPIRES_IN")
                .map_err(|_| ConfigError::Other("JWT_REFRESH_EXPIRES_IN must be set".to_string()))?
                .parse()
                .map_err(|_| ConfigError::Other("JWT_REFRESH_EXPIRES_IN must be a valid number".to_string()))?,

            schema: env::var("SCHEMA")
                .map_err(|_| ConfigError::Other("SCHEMA must be set".to_string()))?,
        })
    }
}
