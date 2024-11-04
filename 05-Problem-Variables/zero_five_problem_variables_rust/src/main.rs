
// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.


fn main() {

    let mut mutable = 5u8;
    let immutable = 6u8;
    println!("mutable: {mutable} immutable {immutable}");

    mutable += immutable;

    println!("mutable: {mutable} immutable {immutable}");



}
