//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Anagrams

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function anagrams that takes in two words and returns a boolean indicating whether or not the words are anagrams.
// Anagrams are words that contain the same characters but not necessarily in the same order.
// Solve this without using .sort().

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function anagrams(word1, word2) {
  if (word1.length !== word2.length) return false;
  let count = {};

  for (let i = 0; i < word1.length; i++) {
    count[word1[i]] ? count[word1[i]]++ : count[word1[i]] = 1;
    console.log(count);
  }

  for (let i = 0; i < word2.length; i++) {
    count[word2[i]] ? count[word2[i]]-- : count[word2[i]] = 1;
    console.log(count);
  }
  console.log(count)

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

// this works but does not require the length to be ===

function anagrams(word1, word2) {
  let most;
  let least;
  if (word1.length > word2.length) {
    most = word1;
    least = word2;
  } else {
    most = word2;
    least = word1;
  }
  for (let i = 0; i < most.length; i++) {
    if (!most.includes(least[i])) {
      return false;
    } else if (!least.includes(most[i])) {
      return false;
    }
  }
  return true;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

