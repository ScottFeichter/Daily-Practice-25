/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/

fn main() {

    fn log_between_stepper(num1: i32, num2: i32, num3: usize) {

        for i in (num1..=num2).step_by(num3) {
                println!("{:?}", i);

            }
        }



    log_between_stepper(5, 9, 1);


}


/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = logBetweenStepper;
