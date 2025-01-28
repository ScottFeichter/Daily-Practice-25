fn main() {

    
    // regular way to make instance
        // --snip--
        let user2 = User {
            active: user1.active,
            username: user1.username,
            email: String::from("another@example.com"),
            sign_in_count: user1.sign_in_count,
        };


    // using struct update syntax
        // --snip--

        let user2 = User {
            email: String::from("another@example.com"),
            ..user1
        };

    // this will have the same values as user1 except where specified
    // the spread must be last...
    // after making one user in this way you cannot make another user from user1
    // but you can make a user from user2



}
