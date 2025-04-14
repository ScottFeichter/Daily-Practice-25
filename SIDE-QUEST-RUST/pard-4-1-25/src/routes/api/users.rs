use axum::{
    extract::{Path, State},
    response::Json,
    http::StatusCode,
    routing::get,
    Router,
};
use diesel::prelude::*;
use std::sync::Arc;
use crate::{
    models::User,
    schema::users,
    db::operations::users::{create_user, update_user},
    AppState,
};

// use crate::db::operations::users::create_user;
// use crate::schema::users::{self, id, password_hash, username};

// Error response struct
#[derive(serde::Serialize)]
pub struct ErrorResponse {
    message: String,
}

// Router setup function
pub fn user_routes() -> Router<Arc<AppState>> {
    Router::new()
        .route("/users", get(get_users))
        // add more routes here
}

// Handler implementation
pub async fn get_users(
    State(state): State<Arc<AppState>>
) -> Result<Json<Vec<User>>, (StatusCode, Json<ErrorResponse>)> {
    // Get a connection from the pool (no await needed for r2d2)
    let mut conn = state.db_pool.get()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    message: format!("Database connection error: {}", e)
                })
            )
        })?;

    // Execute the query (directly, no interact needed)
    let users_result = users::table
        .select(User::as_select())
        .load(&mut *conn)
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    message: format!("Database error: {}", e)
                })
            )
        });

    match users_result {
        Ok(users) => Ok(Json(users)),
        Err(e) => Err(e)
    }
}

// add additional handlers

#[derive(serde::Deserialize)]
pub struct CreateUserRequest {
    name: String,
    username: String,
    email: String,
    password: String,
}

pub async fn create_user_handler(
    State(state): State<Arc<AppState>>,
    Json(user_data): Json<CreateUserRequest>,
) -> Result<Json<User>, (StatusCode, Json<ErrorResponse>)> {
    let mut conn = state.db_pool.get()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    message: format!("Database connection error: {}", e)
                })
            )
        })?;

    create_user(
        &mut conn,
        user_data.email,
        user_data.name,
        user_data.username,
        user_data.password,
    )
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse {
                message: format!("Failed to create user: {}", e)
            })
        )
    })
    .map(Json)
}



#[derive(serde::Deserialize)]
pub struct UpdateUserRequest {
    email: String,
    name: String,
    username: String,
    password: String,
}

pub async fn update_user_handler(
    State(state): State<Arc<AppState>>,
    Path(user_id): Path<i32>,
    Json(user_data): Json<UpdateUserRequest>,
) -> Result<Json<User>, (StatusCode, Json<ErrorResponse>)> {
    let mut conn = state.db_pool.get()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    message: format!("Database connection error: {}", e)
                })
            )
        })?;

    // Check if user exists first
    if !users::table
        .filter(users::id.eq(user_id))
        .select(users::id)
        .first::<i32>(&mut conn)
        .optional()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    message: format!("Database error: {}", e)
                })
            )
        })?
        .is_some() {
        return Err((
            StatusCode::NOT_FOUND,
            Json(ErrorResponse {
                message: "User not found".to_string()
            })
        ));
    }

    update_user(
        &mut conn,
        user_id,
        user_data.email,
        user_data.name,
        user_data.username,
        user_data.password,
    )
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse {
                message: format!("Failed to update user: {}", e)
            })
        )
    })
    .map(Json)
}
