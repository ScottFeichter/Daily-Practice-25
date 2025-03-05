/*
Write a function isPerfectSquare that accepts a number as an argument. The
method should return a boolean indicating whether or not the argument is a
perfect square.

A perfect square is a number that is the product of some number multiplied by
itself.
For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares;
35 is not a perfect square.
*/

const isPerfectSquare = (num: number): boolean => {
  if(num <= 0) return false;
  if(num === 1) return true;

  for(let i = 2; i <= num/2; i++) {
    if(i * i === num) return true;
  }
  return false;
}

console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isPerfectSquare;
