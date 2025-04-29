use serde::{Serialize, Deserialize};
use validator::Validate;
use core::str;
use crate::dto::user_dto::CreateUserRequest;


pub type SignupRequest = CreateUserRequest;


#[derive(Serialize)]
pub struct SignupResponse {
    pub message: String,
    pub user_id: String,  // or whatever identifier you're using
    // You might want to include other non-sensitive user information
}


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
