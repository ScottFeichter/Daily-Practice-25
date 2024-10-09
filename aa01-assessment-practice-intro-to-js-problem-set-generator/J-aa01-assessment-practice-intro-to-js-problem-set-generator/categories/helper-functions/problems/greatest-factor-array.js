/*
Write a function greatestFactor(num) that takes in a number and returns the
greatest factor of that number.

A greatest factor is the largest number that divides into the number with no
remainder. The factor cannot be the same number as the number itself.
For example, the greatest factor of 16 is 8.

Write a function greatestFactorArray(numbers) that takes in an array of numbers
and returns a new array where every even number is replaced with it's greatest
factor. Use the greatestFactor function as a helper function.
*/

// Your code here 

// console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 3, 7]
// console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 7, 5];
// console.log(greatestFactorArray([1, 2, 3, 4, 5])); // [1, 2, 3, 2, 5 ]
// console.log(greatestFactorArray([10, 20, 30, 40, 50])); // [5, 10, 15, 20, 25 ]
// console.log(greatestFactorArray([23, 43, 54, 65, 12])); // [23, 43, 27, 13, 6 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  greatestFactor,
  greatestFactorArray
};
