
// this refactors using tuples

fn main() {
    let rect1 = (30, 50);

    println!(
        "The area of the rectangle is {} square pixels.",
        area(rect1)
    );
}

fn area(dimensions: (u32, u32)) -> u32 {
    dimensions.0 * dimensions.1
}

// In one way, this program is better. Tuples let us add a bit of structure, and we’re now passing just one argument.
// But in another way, this version is less clear: tuples don’t name their elements, so we have to index into the parts of the tuple, making our calculation less obvious.

// Mixing up the width and height wouldn’t matter for the area calculation, but if we want to draw the rectangle on the screen, it would matter!
