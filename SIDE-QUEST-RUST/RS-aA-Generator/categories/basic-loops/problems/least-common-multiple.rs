/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

fn main() {

    fn least_common_multiple(num1: i32, num2: i32) -> i32 {

        for i in 2..i32::MAX {
            if i % num1 == 0 && i % num2 == 0 {
                return i
            }
        }
      return 0;
    }


    println!("{:?}", least_common_multiple(4, 6)); // 12
    println!("{:?}", least_common_multiple(3, 5)); // 15
    println!("{:?}", least_common_multiple(2, 10)); // 10

}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = leastCommonMultiple;
