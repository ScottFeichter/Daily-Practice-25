//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Consonant Cancel

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function consonantCancel(sentence) {
  let words = sentence.split(" ");
  let newWords = words.map(word => removeFirstConsonants(word));
  return newWords.join(" ");
}

function removeFirstConsonants(word) {
  const vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i);
    }
  }
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

// less sexy

const vowels = "aeiouAEIOU";

function consonantCancel(sentence) {
  let words = sentence.split(" ");
  let nuArr = [];
  for (let i = 0; i < words.length; i++) {
    nuArr.push(change(words[i]));
  }
  return nuArr.join(" ");
}

function change(word) {

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i);
    }
  }
  return word;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

