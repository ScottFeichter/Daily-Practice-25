use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use crate::schema::posts;

#[derive(Queryable, Selectable, Deserialize, Serialize)]
#[diesel(table_name = crate::schema::posts)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub content: String,
    pub created_at: chrono::NaiveDateTime,
    pub user_id: i32,
}

#[derive(Insertable, Deserialize)]
#[diesel(table_name = posts)]
pub struct NewPost {
    pub title: String,
    pub content: String,
    pub user_id: i32,
}

#[derive(AsChangeset,Deserialize)]
#[diesel(table_name = posts)]
pub struct UpdatePost {
    pub title: Option<String>,
    pub content: Option<String>,
}
