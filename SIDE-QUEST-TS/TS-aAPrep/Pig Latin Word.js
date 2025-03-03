//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Pig Latin Word

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method pigLatinWord that takes in a word string and translates the word into pig latin.

// Pig latin translation uses the following rules:
// - for words that start with a vowel, add 'yay' to the end
// - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function pigLatinWord(str) {
  let nuStr = "";
  const vowels = "aeiouAEIOU";
  if (vowels.includes(str[0])) {
    nuStr = str + "yay";
    return nuStr;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        nuStr =  str.slice(i) + str.slice(0, i) + "ay";
        return nuStr;
      }
    }
  }
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(pigLatinWord("apple")); // "appleyay"
console.log(pigLatinWord("eat"));     // "eatyay"
console.log(pigLatinWord("banana"));  // "ananabay"
console.log(pigLatinWord("trash"));   // "ashtray"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

