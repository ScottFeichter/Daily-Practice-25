
use std::io;


fn main() {
    println!("Hello, world!");

    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new(); // this is an empty string

    println!("The empty string guess variable is: {guess}");

    io::stdin() // :: this is like dot notation but keys in to a library
        .read_line(&mut guess) // handles input from console and turns it in to a string
        .expect("Failed to read line"); // handles failures 

    // you do the same thing without the use above by using std::io::stdin and it just imports the stdin rather than the entire io

    // By default, Rust has a set of items defined in the standard library that it brings into the scope of every program. This set is called the prelude, and you can see everything in it in the standard library documentation.





}
