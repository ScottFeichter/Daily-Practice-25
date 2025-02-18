// The most straightforward smart pointer is a box, whose type is written Box<T>.

// Boxes allow you to store data on the heap rather than the stack.

// What remains on the stack is the pointer to the heap data.

// How to use a box to store an i32:

fn main() {
    let b = Box::new(5);
    println!("b = {b}");
}





pseudocode representation of a cons list recursive data type containing the list 1, 2, 3 with each pair in parentheses:

(1, (2, (3, Nil)))


In Rust a cons list is produced by recursively calling the cons function. The canonical name to denote the base case of the recursion is Nil. Note that this is not the same as the “null” or “nil” concept in Chapter 6, which is an invalid or absent value.

use crate::List::{Cons, Nil};

fn main() {
    let list = Cons(1, Cons(2, Cons(3, Nil)));
}

Because Rust can’t figure out how much space to allocate for recursively defined types, the compiler gives an error with this helpful suggestion to store the value indirectly by storing a pointer instead.

enum List {
    Cons(i32, Box<List>),
    Nil,
}

use crate::List::{Cons, Nil};

fn main() {
    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));
}

By using a box, we’ve broken the infinite, recursive chain, so the compiler can figure out the size it needs to store a List value.

Boxes provide only the indirection and heap allocation; they don’t have any other special capabilities, like those we’ll see with the other smart pointer types. They also don’t have the performance overhead that these special capabilities incur, so they can be useful in cases like the cons list where the indirection is the only feature we need.

The Box<T> type is a smart pointer because it implements the Deref trait, which allows Box<T> values to be treated like references. When a Box<T> value goes out of scope, the heap data that the box is pointing to is cleaned up as well because of the Drop trait implementation. 
