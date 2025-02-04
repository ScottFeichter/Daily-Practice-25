// Unrecoverable Errors with panic!

// Sometimes bad things happen in your code, and there’s nothing you can do about it. In these cases, Rust has the panic! macro. There are two ways to cause a panic in practice: by taking an action that causes our code to panic (such as accessing an array past the end) or by explicitly calling the panic! macro. In both cases, we cause a panic in our program. By default, these panics will print a failure message, unwind, clean up the stack, and quit. Via an environment variable, you can also have Rust display the call stack when a panic occurs to make it easier to track down the source of the panic.


// Let's try calling panic! in a simple program:

// fn main() {
//     panic!("crash and burn");
// }






// The call to panic! causes the error message contained in the last two lines. The first line shows our panic message and the place in our source code where the panic occurred: src/main.rs:2:5 indicates that it’s the second line, fifth character of our src/main.rs file.

// In this case, the line indicated is part of our code, and if we go to that line, we see the panic! macro call. In other cases, the panic! call might be in code that our code calls, and the filename and line number reported by the error message will be someone else’s code where the panic! macro is called, not the line of our code that eventually led to the panic! call.


// We can use the backtrace of the functions the panic! call came from to figure out the part of our code that is causing the problem. To understand how to use a panic! backtrace, let’s look at another example and see what it’s like when a panic! call comes from a library because of a bug in our code instead of from our code calling the macro directly.


// Listing 9-1 has some code that attempts to access an index in a vector beyond the range of valid indexes.

fn main() {
    let v = vec![1, 2, 3];

    v[99];
}
