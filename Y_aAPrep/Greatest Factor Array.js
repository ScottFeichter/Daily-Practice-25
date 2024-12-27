//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Greatest Factor Array

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function greatestFactorArray that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor.
// A greatest factor is the largest number that divides another with no remainder.
// For example, the greatest factor of 16 is 8.
// (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function greatestFactorArray(array) {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      new_array.push(greatestFactor(array[i]));
    } else {
      new_array.push(array[i]);
    }
  }
  return new_array;
}

function greatestFactor(num) {
  for (let i = num-1; i > 0; i--) {
    if (num % i == 0) {
      return i;
    }
  }
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

