//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Triple Sequence

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function tripleSequence that takes in two numbers, start and length.
// The function should return an array representing a sequence that begins with start and is length elements long.
// In the sequence, every element should be 3 times the previous element.
// Assume that the length is at least 1.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function tripleSequence(start, length) {
  let arr = [];
  arr.push(start);

  for (let i = 1; i < length; i++) {
    arr.push(3 * arr[i-1]);
  }

  return arr;

}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

