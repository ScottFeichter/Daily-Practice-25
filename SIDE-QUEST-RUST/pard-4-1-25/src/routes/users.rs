use axum::{
    extract::State,
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
    AppState,
};

// Error response struct
#[derive(serde::Serialize)]
struct ErrorResponse {
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
