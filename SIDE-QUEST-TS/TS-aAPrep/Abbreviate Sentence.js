//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Abbreviate Sentence

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method abbreviateSentence that takes in a sentence string and returns a new sentence where every
// word longer than 4 characters has all of its vowels removed.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function abbreviateSentence(sentence) {
  let sentArr = sentence.split(" ");
  let outArr = [];
  for (let v of sentArr) {
    if (v.length > 4) {
      outArr.push(remove(v));
    } else {
      outArr.push(v);
    }
  }
  return outArr.join(" ");
}


function remove(word) {
  const vowels = "aeiouAEIOU";
  let wordArr = word.split("");
  let outStr = "";
  for (let v of wordArr) {
    if (!(vowels.includes(v))) {
      outStr += v;
    };
  }
  return outStr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(abbreviateSentence("follow the yellow brick road")); // "fllw the yllw brck road"
console.log(abbreviateSentence("what a wonderful life"));       //"what a wndrfl life"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

