//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Reverse Words

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method reverse_words that takes in a sentence string and returns the sentence with the order of the characters in each word reversed.
// Note that we need to reverse the order of characters in the words, do not reverse the order of words in the sentence.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function reverseWords(sentence) {
  let sentArr = sentence.split(" ");
  let outArr = [];
  for (let v of sentArr) {
    outArr.push(reverseIt(v));
  }
  return outArr;
}

function reverseIt(word) {
  let outString = word.split("");
  outString.reverse();
  return outString.join("");
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(reverseWords('keep coding')); //'peek gnidoc'
console.log(reverseWords('simplicity is prerequisite for reliability')); // 'yticilpmis si etisiuqererp rof ytilibailer'

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

