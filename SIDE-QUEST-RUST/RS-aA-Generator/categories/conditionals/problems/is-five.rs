/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

fn main() {

    fn is_five(num: i32) -> Option<&'static str> {

            if num == 5 {
                return Some("is five")
            } else {
                return None;
            }

    }



println!("{:?}", is_five(5));      // => 'is five'
println!("{:?}", is_five(13));     // => null
// println!("{}", is_five("apple")) // => null

}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
