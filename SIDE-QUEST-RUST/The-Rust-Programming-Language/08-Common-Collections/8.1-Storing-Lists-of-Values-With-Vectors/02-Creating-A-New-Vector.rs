fn main() {


    let v1: Vec<i32> = Vec::new(); // must specify the exact type

    //   Note that we added a type annotation here. Because we aren’t inserting any values into this vector, Rust doesn’t know what kind of elements we intend to store. This is an important point. Vectors are implemented using generics; we’ll cover how to use generics with your own types in Chapter 10. For now, know that the Vec<T> type provided by the standard library can hold any type. When we create a vector to hold a specific type, we can specify the type within angle brackets. In Listing 8-1, we’ve told Rust that the Vec<T> in v will hold elements of the i32 type.

    // More often, you’ll create a Vec<T> with initial values and Rust will infer the type of value you want to store, so you rarely need to do this type annotation. Rust conveniently provides the vec! macro, which will create a new vector that holds the values you give it. Listing 8-2 creates a new Vec<i32> that holds the values 1, 2, and 3. The integer type is i32 because that’s the default integer type, as we discussed in the “Data Types” section of Chapter 3.

    let v2 = vec![1, 2, 3]; // vector macro which infers the type - the default for numbers is i32

}
