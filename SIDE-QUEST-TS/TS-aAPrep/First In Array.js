//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// First In Array

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method firstInArray that takes in an array and two elements,
// the method should return the element that appears earlier in the array.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function firstInArray(arr, ele1, ele2) {
  let ele1Idx;
  let ele2Idx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele1) {
      ele1Idx = i;
    } else if (arr[i] === ele2) {
      ele2Idx = i;
    }
  }
  if (ele1Idx < ele2Idx) {
    return ele1;
  } else if (ele1Idx > ele2Idx) {
    return ele2;
  } else {
    return "not determinable";
  }
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

function firstInArray(arr, ele1, ele2) {

  if ((arr.indexOf(ele1) < 0) && (arr.indexOf(ele2) >= 0)) {
    return ele2;
  } else if ((arr.indexOf(ele2) < 0) && (arr.indexOf(ele1) >= 0)) {
    return ele1;
  } else if (arr.indexOf(ele1) < arr.indexOf(ele2)) {
    return ele1;
  } else if (arr.indexOf(ele1) > arr.indexOf(ele2)) {
    return ele2;
  } else {
    return "not determinable";
  }
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//


console.log(firstInArray(["a", "b", "c", "d"], "d", "b")); // "b"
console.log(firstInArray(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse")); // "dog"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

