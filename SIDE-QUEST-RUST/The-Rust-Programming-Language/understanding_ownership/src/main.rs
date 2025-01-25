fn main() {
// ####################################
    // VRIABLE SCOPE

    // STRING LITERAL
    // - primitive and immutable and known at compile time and only on stack

    // s is not valid here, it's not yet declared
    let sl = "hello"; // sl is valid from this point forward, it comes in to scope
    // scope is from point of declaration until end of current scope



    // STRING TYPE
    // - non primitive and mutable and perhaps not known at compile time and on the heap

    // The double colon :: operator allows us to namespace this particular from function under the String type rather than using some sort of name like string_from.
    let st = String::from("hello"); // st is valid from this point forward, it comes in to scope

    // This kind of string can be mutated:
    let mut mutable_st = String::from("hello");

    mutable_st.push_str(", world!"); // push_str() appends a literal to a String

    println!("{mutable_st}"); // This will print `hello, world!`





    // MEMORY AND ALLOCATION

    // String Literal: immutable and known at compile time, on the stack
    // String Type: mutable and unknown at compile time, allocated on heap

    // The memory must be requested from the memory allocator at runtime.
    // We need a way of returning this memory to the allocator when we’re done with our String.
    // That first part is done by us: when we call String::from, its implementation requests the memory it needs. This is pretty much universal in programming languages.

    // However, the second part is different. In languages with a garbage collector (GC), the GC keeps track of and cleans up memory that isn’t being used anymore, and we don’t need to think about it. In most languages without a GC, it’s our responsibility to identify when memory is no longer being used and to call code to explicitly free it, just as we did to request it. Doing this correctly has historically been a difficult programming problem. If we forget, we’ll waste memory. If we do it too early, we’ll have an invalid variable. If we do it twice, that’s a bug too. We need to pair exactly one allocate with exactly one free.





    // DROP FUNCTION
    // There is a natural point at which we can return the memory our String needs to the allocator: when s goes out of scope. When a variable goes out of scope, Rust calls a special function for us. This function is called drop, and it’s where the author of String can put the code to return the memory. Rust calls drop automatically at the closing curly bracket.

    // Note: In C++, this pattern of deallocating resources at the end of an item’s lifetime is sometimes called Resource Acquisition Is Initialization (RAII). The drop function in Rust will be familiar to you if you’ve used RAII patterns.

    // This pattern has a profound impact on the way Rust code is written. It may seem simple right now, but the behavior of code can be unexpected in more complicated situations when we want to have multiple variables use the data we’ve allocated on the heap. Let’s explore some of those situations now.


    // VARIABLES AND DATA INTERACTING WITH MOVE
    // see the screen shots and it is important to do so






} // the scope of "sl" and "st" is now over, and it is no longer valid, it goes out of scope
