struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect1)
    );
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}


// Here we’ve defined a struct and named it Rectangle.
// Inside the curly brackets, we defined the fields as width and height, both of which have type u32.
// Then, in main, we created a particular instance of Rectangle that has a width of 30 and a height of 50.
