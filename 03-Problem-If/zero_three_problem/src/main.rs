// create a function with an if statement that returns true if an integer is even or false if it is odd
// print examples with the result for both outcomes to the log

fn main() {

    fn is_even(num: u32) -> bool {
        if num % 2 == 0 {
            return true;
        }
        return false;
    }
    println!("46");
    println!("{}", is_even(46));
    println!("93");
    println!("{}", is_even(93));
}
