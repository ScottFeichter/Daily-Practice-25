//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Is Valid Name

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function isValidName that takes in a string and returns a boolean indicating whether or not it is a valid name.

// A name is valid is if satisfies all of the following:

// - contains at least a first name and last name, separated by spaces
// - each part of the name should be capitalized

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isValidName(str) {
  let arr = str.split(" ");
  if (arr.length < 2) {
    return false;
  }
  for (let v of arr) {
    if (!(upperCase.includes(v[0]))) {
      return false
    }
    if (!(lowerCheck(v))) {
      return false;
    }
  }
  return true;
}

function lowerCheck(word) {
  for (let i = 1; i < word.length; i++) {
    if ((upperCase.includes(word[i]))) {
      return false;
    }
  }
  return true;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(isValidName("Kush Patel")); // true
console.log(isValidName("Daniel")); // false
console.log(isValidName("Robert Downey Jr")); // true
console.log(isValidName("ROBERT DOWNEY JR")); // false

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

