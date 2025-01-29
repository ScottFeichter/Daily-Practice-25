fn main() {
    //struct is like a js class and object

    // create the struct:
    struct User {
        active: bool,
        username: String,
        email: String,
        sign_in_count: u64,
    }

    // create an instance:
    let mut user1: User = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };


    // to get a value we use dot notation:
    println!({}, user1.email);


    // if the instance is mutable we can change a value by using dot notation with assignment:
    user1.email = String::from("anotheremail@example.com");


    // Can make a fn to instantiate a struct - this is kind of like a constructor:
    fn build_user(email: String, username: String) -> User {
        User {
            active: true,
            username: username,
            email: email,
            sign_in_count: 1,
        }
    }

    build_user(email: String::from("someemail@example.com"), username: String::from("user3"));


}
