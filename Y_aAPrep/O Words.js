//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// O Words

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function oWords that takes in a sentence string and returns an array of the words that contain an "o".
// Use select in your solution!

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function oWords(sentence) {

  let words = sentence.split(" ");
  let outArr = [];
  for (let v of words) {
    if (hasO(v)) {
      outArr.push(v);
    }
  }
  return outArr;
}

function hasO(word) {
  let o = "oO";
  for (let i = 0; i < word.length; i++) {
    if (o.includes(word[i])) {
      return true;
    }
  }
  return false;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(oWords("How did you do that?")); // ["How", "you", "do"]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

