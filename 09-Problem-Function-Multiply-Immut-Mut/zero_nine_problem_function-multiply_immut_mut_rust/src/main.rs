// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.

fn main() {

    let mut my_mut = 7u8;
    let my_immut = 9u8;

    fn multiply(num1:u8, num2:u8) -> u8 {
        return num1 * num2;
    }



    println!("my_mut: {my_mut} my_immut: {my_immut} multiply: {res} ", res = multiply(my_mut, my_immut));


}
