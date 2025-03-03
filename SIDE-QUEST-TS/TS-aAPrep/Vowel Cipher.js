//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Vowel Cipher

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function vowelCipher(string) {
  const vowels = "aeiou";
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (vowels.includes(char)) {
      let oldIdx = vowels.indexOf(char);
      let newIdx = oldIdx + 1;
      let newChar = vowels[newIdx % vowels.length];
      newString += newChar;
    } else {
      newString += char;
    }
  }
  return newString;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

function vowelCipher(string) {
  const vowels = "aeiou"
  let ans = [];
  for (let i = 0; i < string.length; i++) {

    if (vowels.includes(string[i])) {
      let oldInd = vowels.indexOf(string[i]);
      let nuInd = (oldInd + 1) % vowels.length;
      ans.push(vowels[nuInd]);
    } else {
      ans.push(string[i]);
    }
  }
  return ans.join("");
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

