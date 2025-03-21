use std::env;
use std::sync::Arc;
use axum::Router;
use axum::routing::{delete, get, post};
use diesel::{PgConnection, r2d2};
use diesel::r2d2::ConnectionManager;
use dotenvy::dotenv;
use tokio::signal;

mod models;
mod handlers;
mod schema;


#[tokio::main]
async fn main() {


    dotenv().ok(); // calls the dotenv to load env variables from a .env file into the process env

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set"); // grab the url that was set in the env

    let manager = ConnectionManager::<PgConnection>::new(database_url); // connecting to postgres and creating new db

    let pool = r2d2::Pool::builder() // create a connection pool using r2d2, a thread-safe connection pool manager
        .max_size(5)
        .build(manager)
        .expect("Failed to create pool.");

    let db_connection = Arc::new(pool); // wrap connecitno pool in an ARC

    let app = Router::new() // create new Axum router
        .route("/todos", post(handlers::create_todo))
        .route("/todos", get(handlers::get_todos))
        .route("/todos/{id}", get(handlers::get_todo)) // had to use {} instead of : bc of the language typing
        .route("/todos/{id}", post(handlers::update_todo))
        .route("/todos/{id}", delete(handlers::delete_todo))
        .with_state(db_connection.clone()); // closes the axum router instantiation command

    let listener = tokio::net::TcpListener::bind("127.0.0.1:8080").await.unwrap(); // create TCP listener by binding the IP to the port to make a socket

    let server = axum::serve(listener, app).with_graceful_shutdown(shutdown_signal()); // instantiate and start axum server with the listener and router and add a graceful shutdown


    tokio::spawn(async move { // spawn an async task that simply prints "Server is running"
        println!("Server is running");
    });


    if let Err(e) = server.await { // if an eccurs it prints the error message
        eprintln!("Server error: {}", e);
    }
}

// this defines the function that waits for a termination signal (Ctrl C) then starts a graceful shutdown of the application
async fn shutdown_signal() {
    let ctrl_c = async {
        signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)] // if system is unix
    let terminate = async {
        signal::unix::signal(signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))] // if system is not unix
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }

    println!("signal received, starting graceful shutdown");
}
