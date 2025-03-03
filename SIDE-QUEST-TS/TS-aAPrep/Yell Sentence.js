//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Yell Sentence

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function yellSentence that takes in a sentence string and returns a new sentence where every word is yelled.
// Use map() to solve this.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function yellSentence(sentence) {
  let words = sentence.split(" ");
  let outArr = [];
  for (let i = 0; i < words.length; i++) {
    outArr.push(((words[i].toUpperCase()) + "!"));
  }
  return outArr.join(" ");
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(yellSentence("I have a bad feeling about this")); // "I! HAVE! A! BAD! FEELING! ABOUT! THIS!"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

