//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Ae Count

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function aeCount that takes in a string and returns an object containing the number of a's and e's in the string.
// Assume the string contains only lowercase characters.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function aeCount(str) {
  const a = "aA";
  const e = "eE";
  let count = {a : 0, e : 0};
  for (let i = 0; i < str.length; i++) {
    if (a.includes(str[i])) {
      count["a"]++;
    } else if (e.includes(str[i])) {
      count["e"]++;
    }
  }
  return count;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(aeCount("everyone can program")); // {"a" : 2, "e" : 3}
console.log(aeCount("keyboard")); // {"a" : 1, "e" : 1}

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

