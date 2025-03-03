//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// To Initials

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method to_initials that takes in a person's name string and returns a string representing their initials.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function toInitials(name) {
  let split = name.split(" ");
  let outStr = "";
  for (let i = 0; i < split.length; i++) {
    outStr += split[i][0];
  }
  return outStr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(toInitials("Kelvin Bridges")); // "KB"
console.log(toInitials("Michaela Yamamoto")); // "MY"
console.log(toInitials("Mary La Grange")); // "MLG"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

