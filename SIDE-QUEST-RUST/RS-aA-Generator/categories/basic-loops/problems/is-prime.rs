/*
Define a function isPrime that takes in a number parameter that returns true if
the number is prime. Otherwise, it should return false. A number is prime if it
is only divisible by integers 1 and itself. 1 is not considered a prime number.

For example, isPrime(2) should be true because 2 is not divisible 2 and 1 but
not by any other integers  (2 / 1 = 2).
isPrime(10) should be false because it is divisible by the integers 10, 1, 5,
and 2 (10 / 5 = 2 and 10 / 1 = 10).
*/

fn main() {

    fn is_prime(num: i32) -> bool {
        if num <= 1 { return false };
        if num == 2 { return true };

        for i in 2..num {
            if num % i == 0 {
                return false;
            }
        }
      true
    }


    println!("{:?}", is_prime(2)); // => true
    println!("{:?}", is_prime(10)); // => false
    println!("{:?}", is_prime(11)); // => true
    println!("{:?}", is_prime(9)); // => false
    println!("{:?}", is_prime(2017)); // => true


}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = isPrime;
