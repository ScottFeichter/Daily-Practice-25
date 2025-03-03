//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Two Dimensional Translate

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method twoDtranslate that takes in a 2 dimensional array and translates it into a 1 dimensional array.
// You can assume that the inner arrays always have 2 elements. See the examples.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function twoDtranslate(twoDarr) {
  let outArr = [];
  for (let v of twoDarr) {
    for (let j = 0; j < (v[1]); j++) {
      outArr.push(v[0]);
    }
  }
  return outArr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//


arr_1 = [
  ['boot', 3],
  ['camp', 2],
  ['program', 0]
]

console.log(twoDtranslate(arr_1)); // [ 'boot', 'boot', 'boot', 'camp', 'camp' ]


arr_2 = [
  ['red', 1],
  ['blue', 4]
]

console.log(twoDtranslate(arr_2)); // [ 'red', 'blue', 'blue', 'blue', 'blue' ]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

