fn main() {

    // this will cause an error because you cannot use a reference in the struct
    // the compile will complain that it needs a lifetime specifier which is covered later
    struct User {
        active: bool,
        username: &str,
        email: &str,
        sign_in_count: u64,
    }


    let user1 = User {
        active: true,
        username: "someusername123",
        email: "someone@example.com",
        sign_in_count: 1,
    };

}
