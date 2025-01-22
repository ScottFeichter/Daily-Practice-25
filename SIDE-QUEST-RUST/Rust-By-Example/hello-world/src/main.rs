fn main() {

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


}
