//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Opposite Count

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method oppositeCount that takes in an array of unique numbers.
// The method should return the number of pairs of elements that sum to 0.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function oppositeCount(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j] === 0) && (j > i)) {
        count++;
      }
    }
  }
  return count;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(oppositeCount([ 2, 5, 11, -5, -2, 7 ])); // 2
console.log(oppositeCount([ 21, -23, 24 -12, 23 ])); // 1

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

