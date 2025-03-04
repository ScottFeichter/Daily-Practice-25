/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/
const vowels: string = "aeiou";

const abbreviate = (word: string): string => {
  let result: string = "";
  for(let char of word) {
    if (!vowels.includes(char.toLowerCase())) {
      result+=char;
    }
  }
  return result
  // return str.toLowerCase().replace(/[a,e,i,o,u]/g, ""); // uses regex
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
