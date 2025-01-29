fn main() {

    // Rust has an extremely powerful control flow construct called match that allows you to compare a value against a series of patterns and then execute code based on which pattern matches.

    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter,
    }

    fn value_in_cents1(coin: Coin) -> u8 {
        match coin {
            Coin::Penny => 1,
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter => 25,
        }
    }


    // This seems very similar to a conditional expression used with if, but there’s a big difference: with if, the condition needs to evaluate to a Boolean value, but here it can be any type.
    // The type of coin in this example is the Coin enum that we defined on the first line.

    // the => operator separates the arms and the code to run

    fn value_in_cents2(coin: Coin) -> u8 {
        match coin {
            Coin::Penny => {
                println!("Lucky penny!");
                1
            }
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter => 25,
        }
    }




}
