/*
Write a function isPerfectSquare that accepts a number as an argument. The
method should return a boolean indicating whether or not the argument is a
perfect square.

A perfect square is a number that is the product of some number multiplied by
itself.
For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares;
35 is not a perfect square.
*/

// Your code here
fn main() {


    fn is_perfect_square(num: i32) -> bool {
        if num == 1 { return true };

        for i in 1..=(num/2) {
            if i * i == num {
                return true;
            }
        }
      return false;
    }

    println!("{}", is_perfect_square(1));    // true
    println!("{}", is_perfect_square(4));     // true
    println!("{}", is_perfect_square(64));    // true
    println!("{}", is_perfect_square(100));   // true
    println!("{}", is_perfect_square(169));   // true
    println!("{}", is_perfect_square(2));     // false
    println!("{}", is_perfect_square(40));    // false
    println!("{}", is_perfect_square(32));    // false
    println!("{}", is_perfect_square(50));    // false


}


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = isPerfectSquare;
