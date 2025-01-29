fn main() {
    println!("Hello, world!");

    // field init shorthand syntax
    fn build_user(email: String, username: String) -> User {
        User {
            active: true,
            username,
            email,
            sign_in_count: 1,
        }
    }
}
