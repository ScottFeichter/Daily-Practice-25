
// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.


fn main() {

    let mut my_mutable = 10;
    let my_immutable = 19;

    println!("my_mutable: {my_mutable} my_immutable: {my_immutable}");

    my_mutable += my_immutable;

    println!("my_mutable: {my_mutable} my_immutable: {my_immutable}");


}
