use diesel::prelude::*;
use bcrypt::{hash, DEFAULT_COST};
use crate::models::{User, NewUser, UpdateUser};
use crate::schema::users;

pub fn create_user(
    conn: &mut PgConnection,
    email: String,
    name: String,
    username: String,
    password: String,
) -> Result<User, Box<dyn std::error::Error>> {
    let password_hash = hash(password.as_bytes(), DEFAULT_COST)?;

    let new_user = NewUser {
        name,
        username,
        email,
        password_hash,
    };

    let user = diesel::insert_into(users::table)
        .values(&new_user)
        .get_result(conn)?;

    Ok(user)
}


pub fn update_user(
    conn: &mut PgConnection,
    user_id: i32,
    email: Option<String>,
    name: Option<String>,
    username: Option<String>,
    password: Option<String>,
) -> Result<User, Box<dyn std::error::Error>> {
    let password_hash = password.map(|pwd| hash(pwd.as_bytes(), DEFAULT_COST))
        .transpose()?;

    let update_user = UpdateUser {
        email,
        name,
        username,
        password_hash,
    };

    let updated_user = diesel::update(users::table)
        .filter(users::id.eq(user_id))
        .set(&update_user)
        .get_result(conn)?;

    Ok(updated_user)
}

pub async fn delete_user(
    conn: &mut PgConnection,
    user_id: i32,
) -> Result<(), diesel::result::Error> {
    use crate::schema::users::dsl::*;

    diesel::delete(users.find(user_id))
        .execute(conn)?;

    Ok(())
}
