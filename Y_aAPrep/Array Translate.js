//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Array Translate

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method arrayTranslate that takes in an array whose elements alternate between words and numbers.
// The method should return a string where each word is repeated the number of times that immediately follows in the array.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function arrayTranslate(arr) {
  let outStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "string") {
      for (let j = 0; j < arr[i + 1]; j++) {
        outStr += arr[i];
      }
    }
  }
  return outStr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(arrayTranslate(["Cat", 2, "Dog", 3, "Mouse", 1])); // "CatCatDogDogDogMouse"

console.log(arrayTranslate(["red", 3, "blue", 1])); // "redredredblue"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

