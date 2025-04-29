// importing the models
pub mod user_model;
mod post_model;
mod api;

// re-export models
pub use user_model::*;
pub use post_model::*;
pub use api::*;
