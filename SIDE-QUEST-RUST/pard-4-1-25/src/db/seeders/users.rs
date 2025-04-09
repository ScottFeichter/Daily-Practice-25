use diesel::prelude::*;
use crate::models::NewUser;
use crate::schema::users;
use bcrypt::{hash, DEFAULT_COST}; // You'll need the bcrypt crate for password hashing

pub fn seed_users(conn: &mut PgConnection) -> QueryResult<()> {
    // First clear the table to avoid duplicates
    diesel::delete(users::table).execute(conn)?;

    let users = vec![
        NewUser {
            name: "John Doe".to_string(),
            username: "johndoe".to_string(),
            email: "john@example.com".to_string(),
            password_hash: hash("password123", DEFAULT_COST).unwrap(),
        },
        NewUser {
            name: "Jane Smith".to_string(),
            username: "janesmith".to_string(),
            email: "jane@example.com".to_string(),
            password_hash: hash("password123", DEFAULT_COST).unwrap(),
        },
    ];

    diesel::insert_into(users::table)
        .values(&users)
        .execute(conn)?;

    Ok(())
}
