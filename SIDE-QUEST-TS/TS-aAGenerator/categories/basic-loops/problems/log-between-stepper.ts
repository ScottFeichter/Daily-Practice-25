/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/

const logBetweenStepper = (num1: number, num2: number, num3: number): void => {
  if(num1 === num2) console.log("min and max are the same");
  for(let i = num1; i <= num2; i+=num3){
    console.log(i);
  }
}

logBetweenStepper(5, 9, 1);
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
