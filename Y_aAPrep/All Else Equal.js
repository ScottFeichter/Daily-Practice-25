//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// All Esle Equal

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function allElseEqual that takes in an array of numbers.
// The function should return the element of the array that is equal to half of the sum of all elements of the array.
// If there is no such element, the method should return null.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function allElseEqual(arr) {
  let sum = sumArray(arr);

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === sum / 2.0) {
      return num;
    }
  }
  return null;
}

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }

  return sum;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

