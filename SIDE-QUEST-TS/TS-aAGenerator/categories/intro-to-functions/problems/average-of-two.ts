/*
Define a function called averageOfTwo that takes in two number parameters.
The function should return the average of the two numbers.
*/

const averageOfTwo = (num1: number, num2: number): number => {
  return (num1 + num2)/2;

}

console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = averageOfTwo;
