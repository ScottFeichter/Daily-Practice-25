fn main() {

    // The Option type encodes the very common scenario in which a value could be something or it could be nothing.

    // Rust doesn’t have the null feature that many other languages have. Null is a value that means there is no value there.

    // The problem with null values is that if you try to use a null value as a not-null value, you’ll get an error of some kind.

    // However, the concept that null is trying to express is still a useful one: a null is a value that is currently invalid or absent for some reason.

    // The problem isn’t really with the concept but with the particular implementation. As such, Rust does not have nulls, but it does have an enum that can encode the concept of a value being present or absent. This enum is Option<T>, and it is defined by the standard library as follows:

    enum Option<T> {
        None,
        Some(T),
    }

    // The Option<T> enum is so useful that it’s even included in the prelude; you don’t need to bring it into scope explicitly. Its variants are also included in the prelude: you can use Some and None directly without the Option:: prefix. The Option<T> enum is still just a regular enum, and Some(T) and None are still variants of type Option<T>.

    ///////////////////////////////////////////

    // The Option<T> enum is so useful that it’s even included in the prelude; you don’t need to bring it into scope explicitly. Its variants are also included in the prelude: you can use Some and None directly without the Option:: prefix. The Option<T> enum is still just a regular enum, and Some(T) and None are still variants of type Option<T>.

    // <T> means that the Some variant of the Option enum can hold one piece of data of any type, and that each concrete type that gets used in place of T makes the overall Option<T> type a different type. Here are some examples of using Option values to hold number types and string types:

    let some_number = Some(5);
    let some_char = Some('e');

    let absent_number: Option<i32> = None;



    // Rust doesn’t understand how to add an i8 and an Option<i8>, because they’re different types.

    // You have to convert an Option<T> to a T before you can perform T operations with it.

    // Eliminating the risk of incorrectly assuming a not-null value helps you to be more confident in your code. In order to have a value that can possibly be null, you must explicitly opt in by making the type of that value Option<T>. Then, when you use that value, you are required to explicitly handle the case when the value is null. Everywhere that a value has a type that isn’t an Option<T>, you can safely assume that the value isn’t null. This was a deliberate design decision for Rust to limit null’s pervasiveness and increase the safety of Rust code.


    // To get the T value out of a Some variant when you have a value of type Option<T>  use mehtods of the The Option<T> you can check them out in its documentation.


    // In general, in order to use an Option<T> value, you want to have code that will handle each variant. You want some code that will run only when you have a Some(T) value, and this code is allowed to use the inner T. You want some other code to run only if you have a None value, and that code doesn’t have a T value available. The match expression is a control flow construct that does just this when used with enums: it will run different code depending on which variant of the enum it has, and that code can use the data inside the matching value.










}
