use axum::{http::StatusCode, response::IntoResponse, routing::get, Json, Router};
use std::net::SocketAddr;
use tower_http::cors::{Any, CorsLayer};


mod types; // have to use mod first because types is not built in
use types::Person; // using the Person struct from the types file

#[tokio::main] // allows us to make the main function async
async fn main() {
    let cors = CorsLayer::new().allow_origin(Any);

    let app = Router::new() // create a router instance
        .route("/", get(get_root)) // defines route(path, method(handler))
        .route("/people", get(get_people))
        .route("/tester", get(get_tester))
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000)); // socket is ip, port, and protocol
    println!("listening on {}", addr);

    // axum web framework for rust this starts the server and listens
    // axum::Server is the type and it is being binded to the the slice of variable addr
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        // serve() takes an argument of the service that will handle the incoming requests in this case the app we created from Router and the into_make_service() helper method from Router converts the app instance of Router into a service that can handle incoming HTTP so the server can execute
        .await // wait for the server to run
        .unwrap();
        // if server fails to bind or run for any reason stop execution and panic
        // could use Result instead of unwrap()
}

// handler functions
// string slice w static lifetime (longest possible - entire duration of program)
async fn get_root() -> &'static str {
    "Hello, World!"
}



async fn get_people() -> impl IntoResponse {
    let people = vec![
        Person {
            name: String::from("Person A"),
            age: 36,
            favourite_food: Some(String::from("Pizza")),
        },
        Person {
            name: String::from("Person B"),
            age: 5,
            favourite_food: Some(String::from("Broccoli")),
        },
        Person {
            name: String::from("Person C"),
            age: 100,
            favourite_food: None,
        },
    ];

    (StatusCode::OK, Json(people))
}

async fn tester() -> &'static str { // handler function
    "testing, testing, 1, 2, 3"
}
