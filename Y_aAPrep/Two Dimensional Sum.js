//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Two Dimensional Sum

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method twoDsum that takes in a two-dimensional array and returns the sum of all elements in the array.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function twoDsum(twoDarr) {
  let sum = 0;
  for (let v of twoDarr) {
    for (let val of v) {
      sum += val;
    }
  }
  return sum;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//


let array_1 = [
  [4, 5],
  [1, 3, 7, 1]
]
console.log(twoDsum(array_1)); // 21

let array_2 = [
  [3, 3],
  [2],
  [2, 5]
]
console.log(twoDsum(array_2)); // 15


//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//
