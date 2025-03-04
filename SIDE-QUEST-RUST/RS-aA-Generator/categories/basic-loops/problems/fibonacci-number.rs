/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/

fn main() {

    fn fib(n: i32) -> i32 {
        let mut sum: i32 = 0;
        let mut num1: i32 = 0;
        let mut num2: i32 = 1;

        for i in 2..=n {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }

    return num2;


    }


    println!("{}", fib(1));    // 1
    println!("{}", fib(2));    // 1
    println!("{}", fib(3));    // 2
    println!("{}", fib(4));    // 3
    println!("{}", fib(5));    // 5
    println!("{}", fib(6));    // 8
    println!("{}", fib(10));   // 55
    println!("{}", fib(11));   // 89
    println!("{}", fib(12));   // 144



}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = fib;
