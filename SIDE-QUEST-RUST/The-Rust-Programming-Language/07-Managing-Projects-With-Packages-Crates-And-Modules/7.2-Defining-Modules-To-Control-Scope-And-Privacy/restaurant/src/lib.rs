
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {
            println!("add_to_waitlist")
        }

        fn seat_at_table() {
            println!("eat_to_table")
        }
    }

    pub fn eat_at_restaurant() {
        // Absolute path
        crate::front_of_house::hosting::add_to_waitlist();

        // Relative path
        front_of_house::hosting::add_to_waitlist();
    }

    mod serving {
        fn take_order() {
            println!("take_order")
        }

        fn serve_order() {
            println!("serve_order")
        }

        fn take_payment() {
            println!("take_payment")
        }
    }
}
