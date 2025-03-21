use std::sync::Arc; // Arc is used to share ownership of the db connection pool across multiple handlers safely

use axum::{
    extract::State, // extracts global state (ie the DB connection pool)
    http::StatusCode,
    Json,
};
use axum::extract::Path;
use diesel::prelude::*; // imports Diesel's query builder and ORM functionality
use diesel::r2d2;
use diesel::r2d2::ConnectionManager;
use crate::models::{NewTodo, Todo, UpdateTodo}; // import models
use crate::schema::todos; // import todos table
use crate::schema::todos::id; // import the id column from the todos table

pub type DbPool = Arc<r2d2::Pool<ConnectionManager<PgConnection>>>; // define DbPool as a shared reference type...


pub async fn create_todo(
    State(db): State<DbPool>,
    Json(new_todo): Json<NewTodo>,
) -> (StatusCode,Json<Todo>) {
    let mut conn = db.get().map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap(); // makes connection to database

    let todo = diesel::insert_into(todos::table)
        .values(&new_todo)
        .get_result(&mut conn)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    (StatusCode::CREATED, Json(todo))
}


pub async fn get_todos(
    State(db): State<DbPool>,
) -> (StatusCode,Json<Vec<Todo>>) {
    let mut conn = db.get().map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    let results = todos::table.load::<Todo>(&mut conn)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    (StatusCode::OK, Json(results))
}


pub async fn get_todo(
    Path(todo_id): Path<i32>,
    State(db): State<DbPool>,
) -> (StatusCode,Json<Todo>) {
    let mut conn = db.get().map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    let result = todos::table.filter(id.eq(todo_id)).first::<Todo>(&mut conn)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    (StatusCode::OK, Json(result))
}


pub async fn update_todo(
    Path(todo_id): Path<i32>,
    State(db): State<DbPool>,
    Json(update_todo): Json<UpdateTodo>,
) -> (StatusCode,Json<Todo>) {
    let mut conn = db.get().map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    let todo = diesel::update(todos::table.filter(id.eq(todo_id)))
        .set(&update_todo)
        .get_result(&mut conn)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    (StatusCode::OK, Json(todo))
}


pub async fn delete_todo(
    Path(todo_id): Path<i32>,
    State(db): State<DbPool>,
) -> StatusCode {
    let mut conn = db.get().map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    let _ =diesel::delete(todos::table.filter(id.eq(todo_id)))
        .execute(&mut conn)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR).unwrap();

    StatusCode::NO_CONTENT
}
