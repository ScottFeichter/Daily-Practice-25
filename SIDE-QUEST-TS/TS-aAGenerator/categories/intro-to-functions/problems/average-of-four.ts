/*
Define a function called averageOfFour that takes in four number parameters.
The function should return the average of all of the four numbers.
*/

const averageOfFour = (num1: number, num2: number, num3: number, num4: number): number => {

  return (num1 + num2 + num3 + num4)/4;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = averageOfFour;
