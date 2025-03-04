#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}


// To define the function within the context of Rectangle, we start an impl (implementation) block for Rectangle.
// Everything within this impl block will be associated with the Rectangle type.
// Then we move the area function within the impl curly brackets and change the first (and in this case, only) parameter to be self in the signature and everywhere within the body.
// In main, where we called the area function and passed rect1 as an argument, we can instead use method syntax to call the area method on our Rectangle instance.
// The method syntax goes after an instance: we add a dot followed by the method name, parentheses, and any arguments.

// In the signature for area, we use &self instead of rectangle: &Rectangle.
// The &self is actually short for self: &Self.
// Within an impl block, the type Self is an alias for the type that the impl block is for.
// Methods must have a parameter named self of type Self for their first parameter, so Rust lets you abbreviate this with only the name self in the first parameter spot.

// Note that we still need to use the & in front of the self shorthand to indicate that this method borrows the Self instance, just as we did in rectangle: &Rectangle.
// Methods can take ownership of self, borrow self immutably, as we’ve done here, or borrow self mutably, just as they can any other parameter.



// We chose &self here for the same reason we used &Rectangle in the function version: we don’t want to take ownership, and we just want to read the data in the struct, not write to it.
// If we wanted to change the instance that we’ve called the method on as part of what the method does, we’d use &mut self as the first parameter.
// Having a method that takes ownership of the instance by using just self as the first parameter is rare; this technique is usually used when the method transforms self into something else and you want to prevent the caller from using the original instance after the transformation.

// The main reason for using methods instead of functions, in addition to providing method syntax and not having to repeat the type of self in every method’s signature, is for organization.
// We’ve put all the things we can do with an instance of a type in one impl block rather than making future users of our code search for capabilities of Rectangle in various places in the library we provide.

// Note that we can choose to give a method the same name as one of the struct’s fields. For example, we can define a method on Rectangle that is also named width:


// impl Rectangle {
//     fn width(&self) -> bool {
//         self.width > 0
//     }
// }

// fn main() {
//     let rect1 = Rectangle {
//         width: 30,
//         height: 50,
//     };

//     if rect1.width() {
//         println!("The rectangle has a nonzero width; it is {}", rect1.width);
//     }
// }




// Here, we’re choosing to make the width method return true if the value in the instance’s width field is greater than 0 and false if the value is 0: we can use a field within a method of the same name for any purpose.
// In main, when we follow rect1.width with parentheses, Rust knows we mean the method width. When we don’t use parentheses, Rust knows we mean the field width.

// Often, but not always, when we give a method the same name as a field we want it to only return the value in the field and do nothing else.
// Methods like this are called getters, and Rust does not implement them automatically for struct fields as some other languages do.
// Getters are useful because you can make the field private but the method public, and thus enable read-only access to that field as part of the type’s public API.
// We will discuss what public and private are and how to designate a field or method as public or private in Chapter 7.



