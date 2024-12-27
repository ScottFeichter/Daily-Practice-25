//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Rotate Array

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method rotateArray that takes in an array and a number.
// The method should return the array after rotating the elements the specified number of times.
// A single rotation takes the last element of the array and moves it to the front.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function rotateArray(arr, num) {
  let ele;
  for (let i = num; i > 0; i--) {
    ele = arr.pop();
    arr.unshift(ele);
  }
  return arr;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(rotateArray([ "Matt", "Danny", "Mashu", "Matthias" ], 1)); // [ "Matthias", "Matt", "Danny", "Mashu" ]

console.log(rotateArray([ "a", "b", "c", "d" ], 2)); // [ "c", "d", "a", "b" ]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

