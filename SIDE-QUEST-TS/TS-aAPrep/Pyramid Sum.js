//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Pyramid Sum

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function pyramidSum that takes in an array of numbers representing the base of a pyramid.
// The function should return a 2D array representing a complete pyramid with the given base.
// To construct a level of the pyramid, we take the sum of adjacent elements of the level below.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function pyramidSum(base) {
  let pyramid = [base];

  while (pyramid.length < base.length) {
    let prevLevel = pyramid[0];
    let nextLevel = adjacentSum(prevLevel);
    pyramid.unshift(nextLevel);
  }
  return pyramid;
}

function adjacentSum(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      newArr.push(arr[i] + arr[i + 1]);
    }
  }
  return newArr;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

function pyramidSum(base) {
  let pyramid = [];
  pyramid[base.length - 1] = base;
  let prev = base;
  for (let i = 1; i < base.length; i++) {
    temp = levelReturn(prev);
    pyramid[base.length - i - 1] = temp;
    prev = temp;
  }
  return pyramid;
}

function levelReturn(prev) {
  let temp = [];
  for (let i = 0; i < prev.length - 1; i++) {
    temp.push(prev[i] + prev[i + 1]);
  }
  return temp;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

