fn main() {

    // https://doc.rust-lang.org/stable/rust-by-example/hello/print.html

    // This is an example of a line comment.
    /* Block Comment */

    /* Printing is handled by a series of macros defined in std::fmt some of which are:

    format!: write formatted text to String
    print!: same as format! but the text is printed to the console (io::stdout).
    println!: same as print! but a newline is appended.
    eprint!: same as print! but the text is printed to the standard error (io::stderr).
    eprintln!: same as eprint! but a newline is appended.

    */

    fn adder(num1: u32, num2: u32) -> u32 {
        let sum: u32 = num1 + num2;

        return sum;
    }

    let x: u32 = 5;
    let y: u32 = 6;
    println!("Hello, world!");
    println!("I am a Rustacean!");
    println!("The variable x is {}", x);
    println!("The variable x is {}, the variable y is {}", x, y);
    println!("The variable x is {x}, the variable y is {y}");
    println!("The sum of x and y is {}", adder(x, y));
    println!("Here are curly braces {{}}");

    let result: u32 = adder(5, 2);
    println!("Result = {}", result);

    // Positional arguments
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");

    // Named arguments
    println!("{subject} {verb} {object}",
        object="the lazy dog",
        subject="the quick brown fox",
        verb="jumps over");

    // Format character
    println!("Base 10:               {}",   69420); // 69420
    println!("Base 2 (binary):       {:b}", 69420); // 10000111100101100
    println!("Base 8 (octal):        {:o}", 69420); // 207454
    println!("Base 16 (hexadecimal): {:x}", 69420); // 10f2c

    // right-justify w white space 4
    println!("{number:>5}", number=1);




    // padding numbers w 0s
    println!("{number:0>5}", number=1); // 00001
    // and left-adjust by flipping the sign. This will output "10000".
    println!("{number:0<5}", number=1); // 10000

    // You can use named arguments in the format specifier by appending a `$`.
    println!("{number:0>width$}", number=1, width=5);





    // Only types that implement fmt::Display can be formatted with `{}`. User-
    // defined types do not implement fmt::Display by default.

    #[allow(dead_code)] // disable `dead_code` which warn against unused module
    struct Structure(i32);

    // This will not compile because `Structure` does not implement
    // fmt::Display.
    // println!("This struct `{}` won't print...", Structure(3));
    // TODO ^ Try uncommenting this line


    // For Rust 1.58 and above, you can directly capture the argument from a
    // surrounding variable. Just like the above, this will output
    // "    1", 4 white spaces and a "1".
    let number: f64 = 1.0;
    let width: usize = 5;
    println!("{number:>width$}");



}
