/*
Define a function oddNumOnly that takes in a number parameter and returns the
number if it is odd and returns null otherwise.
*/

fn main() {


    fn odd_num_only(num: i32) -> Option<i32> {

        if num % 2 != 0 { return Some(num) }

        else { return None}
    }




println!("{:?}", odd_num_only(2));   // => null
println!("{:?}", odd_num_only(5));   // => 5
println!("{:?}", odd_num_only(-17)); // => -17
println!("{:?}", odd_num_only(0));   // => null
println!("{:?}", odd_num_only(3))    // => 3



}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
