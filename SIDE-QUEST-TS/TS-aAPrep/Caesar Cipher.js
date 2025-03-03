//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Caesar Cipher

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method caesarCipher that takes in a string and a number.
// The function should return a new string where every character of the original is shifted num characters in the alphabet.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function caesarCipher(string, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let oldIdx = alphabet.indexOf(char);
    let newIdx = oldIdx + num;
    let newChar = alphabet[newIdx % alphabet.length];
    newString += newChar;
  }
  return newString;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//


const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
  let ans = [];
  for (let i = 0; i < string.length; i++) {
    let aInd = alphabet.indexOf(string[i]);
    let nInd = (aInd + num) % alphabet.length;
    ans.push(alphabet[nInd]);
  }
  return ans.join("");
}




//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

//----------------------------------------------------------------------PSEUDO SOLUTION 1---------------------------------------------------------------//

// create an empty array variable
// iterate through the string
// compare each character to position in alphabet
// add to array character shifted by num with modulo 26
// return array joined as a string

//----------------------------------------------------------------------PSEUDO SOLUTION 1---------------------------------------------------------------//

// create obj with every letter having value
// replace every character with the value of the object
// good familiarity with objects and counter object
// the more specific the problem is the more likely an object is useful
// see anagrams problem
