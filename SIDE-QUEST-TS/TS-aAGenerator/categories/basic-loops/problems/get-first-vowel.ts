/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

const getFirstVowel = (str: string): string | null => {
  const vowels = "aeiouAEIOU";

  for(let char of str) {
    if(vowels.includes(char)) return char;
  }

  return null;

}

console.log(getFirstVowel('battery'));      // 'a'
console.log(getFirstVowel('tunnel'));       // 'u'
console.log(getFirstVowel('dog'));          // 'o'
console.log(getFirstVowel('conventional')); // 'o'
console.log(getFirstVowel('rhythm'));       // null
console.log(getFirstVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
