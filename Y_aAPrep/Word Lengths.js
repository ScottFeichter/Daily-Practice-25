//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Word Lengths

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method word_lengths that takes in a sentence string and returns an object where every key is a word of the sentence,
// and its' corresponding value is the length of that word.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function wordLengths(sentence) {
  let words = sentence.split(" ");
  let outObj = {};
  for (let i = 0; i < words.length; i++) {
    outObj[words[i]] = words[i].length;
  }
  return outObj;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(wordLengths("this is fun")); // {"this" : 4, "is" : 2, "fun" : 3}
console.log(wordLengths("When in doubt, leave it out")); // {"When" : 4, "in" : 2, "doubt" : 6, "leave" : 5, "it" : 2, "out" : 3}

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

