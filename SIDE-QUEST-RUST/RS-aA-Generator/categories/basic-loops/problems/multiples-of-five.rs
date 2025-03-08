/*
Define a function multiplesOfFive that takes in a number parameter. It should
return a count of all numbers greater than or equal to 0 and less than the
number parameter that are multiples of 5.
*/

fn main() {

    fn multiples_of_five(num: i32) -> i32 {
        let mut count: i32 = 0;
        for i in 0..num {
            if i % 5 == 0 { count+=1 }
        }

     return count;

    }


    println!("{:?}", multiples_of_five(20)); // => 4    // 0, 5, 10, 15
    println!("{:?}", multiples_of_five(10)); // => 2    // 0, 5
    println!("{:?}", multiples_of_five(14)); // => 3    // 0, 5, 10
    println!("{:?}", multiples_of_five(21)); // => 5    // 0, 5, 10, 15, 20

}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = multiplesOfFive;
