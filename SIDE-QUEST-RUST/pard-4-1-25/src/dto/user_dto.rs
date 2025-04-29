use serde::{Serialize, Deserialize};
use validator::{Validate, ValidationError};
use core::str;
use regex::Regex;

#[derive(Debug, Deserialize, Validate)]
pub struct LoginRequest {
    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Invalid email format")
    )]
    pub email: String,

    #[validate(length(min = 1, message = "Password is required"))]
    pub password: String,
}


#[derive(Validate, Deserialize)]
pub struct CreateUserRequest {
    #[validate(length(min = 1, message = "Name is required"))]
    pub name: String,

    #[validate(
        length(min = 1, message = "Username is required"),
        length(max = 25, message = "Username must not be more than 25 characters. "),
    )]
    pub username: String,

    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Email is invalid")
    )]
    pub email: String,

    #[validate(
        length(
            min = 8,
            max = 25,
            message = "Password must be between 8 and 25 characters"
        ),
        custom = "validate_password_complexity"
    )]
    pub password: String,

    #[validate(
        must_match(other = "password", message="passwords do not match")
    )]
    pub verify_password: String,
}

// Custom password validator function
fn validate_password_complexity(password: &str) -> Result<(), ValidationError> {
    let has_uppercase = password.chars().any(|c| c.is_uppercase());
    let has_number = password.chars().any(|c| c.is_numeric());
    let has_special = Regex::new(r#"[!@#$%^&*(),.?\":{}<>]"#)
        .unwrap()
        .is_match(password);

    if !has_uppercase || !has_number || !has_special {
        return Err(ValidationError::new(
            "Password must contain at least one uppercase letter, one number, and one special character"
        ));
    }

    Ok(())
}



#[derive(Deserialize)]
pub struct UpdateUserRequest {
    #[serde(default)] // This makes the field optional in JSON
    pub email: Option<String>,
    #[serde(default)]
    pub name: Option<String>,
    #[serde(default)]
    pub username: Option<String>,
    #[serde(default)]
    pub password: Option<String>,
}


#[derive(Serialize)]
pub struct DeleteResponse {
   pub message: String,
}
