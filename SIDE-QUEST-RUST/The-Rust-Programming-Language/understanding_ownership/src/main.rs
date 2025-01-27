fn main() {
// ####################################
    // VARIABLE SCOPE

    // STRING LITERAL
    // - primitive and immutable and known at compile time and only on stack

    // sl is not valid here, it's not yet declared
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







    // REFERENCES AND BORROWING

    // & is the reference operator
    // * is the dereference operator


    // A reference is like a pointer in that it’s an address we can follow to access the data stored at that address; that data is owned by some other variable.
    // Unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.

    // Since it does not own the value will not be dropped when the reference stops being used

    // The action of creating a reference is called borrowing

    // A mutable reference to a value can have no other references to that value even other immutables
    // This helps prevent data races at compile time

    // data races:
    // - two or more pointers access the same data at the same time
    // - at least one of the pointers is being used to write the data
    // - there is no mechanism being used to synchronize access to the data

    // multiple immutable references are allowed but if an immutable reference exists there will not be a mutable reference until the scope of the immutables ends

    // mutable reference scope:
    //


    // DANGLING REFERENCES
    // a pointer that references a location in memory that may have been given to someone else—by freeing some memory while preserving a pointer to that memory

    // In Rust the compiler guarantees that references will never be dangling references:
    // if you have a reference to some data, the compiler will ensure that the data will not go out of scope before the reference to the data does.



    // THE RULES OF REFERENCES

    // - At any given time, you can have either one mutable reference or any number of immutable references.
    // - References must always be valid.






    // THE SLICE

    // Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection.
    // A slice is a kind of reference, so it does not have ownership.


    // String Slices
    // starting index...ending index (use + 1 of the actual end)
    // this going to track the starting index and the length of the slice
    // the string slice prevents a silent failure of a borrowed mutable reference existing at the same time as an immutable reference???
    // the type for a string slice is:  &str

    // Syntatic Sugar on the range syntax
    // [..2] === [0..2]
    // [3..len] === [3..]
    // [..] === [0..len]


    // STRING LITERALS AS SLICES

    // the variable of a string literal IS a string slice because they are both an immutable reference to something (on the stack???)...


    // STRING SLICES AS PARAMETERS
    // they will work on slices and types...


    // OTHER SLICES
    // you can have a slice of any (same type collection???)  and it's going represent the same thing which is the start and the length primitive types...


    // SUMMARY

    // The concepts of ownership, borrowing, and slices ensure memory safety in Rust programs at compile time.
    // The Rust language gives you control over your memory usage in the same way as other systems programming languages,
    // but having the owner of data automatically clean up that data when the owner goes out of scope means you don’t have to write and debug extra code to get this control.



} // the scope of "sl" and "st" is now over, and it is no longer valid, it goes out of scope
