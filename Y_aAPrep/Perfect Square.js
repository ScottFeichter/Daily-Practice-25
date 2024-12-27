//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Perfect Square

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function perfectSquare that takes in a number and returns a boolean
// indicating whether it is a perfect square. A perfect square is a number that
// results from multiplying a number by itself. For example, 9 is a perfect square
// because 3 x 3 = 9, and 25 is a perfect square because 5 x 5 = 25.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function perfectSquare(num) {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(perfectSquare(5));   // false
console.log(perfectSquare(12));  // false
console.log(perfectSquare(30));  // false
console.log(perfectSquare(9));   // true
console.log(perfectSquare(25));  // true

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

