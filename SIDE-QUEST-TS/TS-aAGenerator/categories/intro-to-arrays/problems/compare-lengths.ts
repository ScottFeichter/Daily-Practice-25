/*
Define a function called compareLengths that accepts two array parameters. The
function should return true if the arrays have different lengths. The function
should return false otherwise.
*/

const compareLengths = (arr1: any[], arr2: any[]): boolean => {
  return arr1.length !== arr2.length;
}


let a1 = ['a', 'b', 'c'];
let a2 = ['w', 'x', 'y'];
let a3 = [1, 3, 7, 4];

console.log(compareLengths(a1, a2)); // => false
console.log(compareLengths(a1, a3)); // => true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = compareLengths;
