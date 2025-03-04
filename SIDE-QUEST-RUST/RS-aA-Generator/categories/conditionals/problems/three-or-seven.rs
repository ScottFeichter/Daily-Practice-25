/*Define a function threeOrSeven that takes in a number parameter and returns
3 if the number is divisible by 3, 7 if the number is divisible by 7, and
21 if the number is divisible by both 3 and 7. Otherwise the function should
return the original number.
*/

fn main() {

    fn three_or_seven(num: i32) -> i32 {
        if num == 0 { return 0 }

        if num % 3 == 0 && num % 7 == 0 {
            return 21
        } else if num % 3 == 0 {
            return 3
        } else if num % 7 == 0 {
            return 7
        } else {
            return num
        }
    }




    println!("{}", three_or_seven(3));   // => 3
    println!("{}", three_or_seven(15));  // => 3
    println!("{}", three_or_seven(7));   // => 7
    println!("{}", three_or_seven(14));  // => 7
    println!("{}", three_or_seven(21));  // => 21
    println!("{}", three_or_seven(-42)); // => 21
    println!("{}", three_or_seven(100)); // => 100
    println!("{}", three_or_seven(0));   // => 0
    println!("{}", three_or_seven(-20)); // => -20


}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
