//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Format Name

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method formatName that takes in a name string and returns the name properly capitalized.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function formatName(str) {
  let arr = str.split(" ");
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    outArr.push((arr[i].slice(0, 1).toUpperCase()) + (arr[i].slice(1).toLowerCase()));
  }
  return outArr.join(" ");
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(formatName("chase WILSON")); // "Chase Wilson"
console.log(formatName("brian CrAwFoRd scoTT")); // "Brian Crawford Scott"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

