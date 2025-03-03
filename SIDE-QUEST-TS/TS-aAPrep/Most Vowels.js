//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Most Vowels

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.


//--------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//


function mostVowels(sentence) {
  let counts = {};
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    counts[word] = countVowels(word);
  }

  let largestNum = 0;
  let largestWord = "";

  for (key in counts) {
    if (counts[key] > largestNum) {
      largestNum = counts[key];
      largestWord = key;
    }
  }

  return largestWord;
}

function countVowels(word) {
  let count = 0;
  let vowels ="aeiou";

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(mostVowels("what a wonderful life")); // "wonderful"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//


// This problem is best divided into two functions: countVowels and mostVowels

// countVowels-------------------------------------------------------------------

// STEP 1: declare a function identified as countVowels with parameter word, then inside the block:
// STEP 2: using let, initialize an array of chars identified as "vowels" and set the values to a, e, i, o, u
// STEP 3: using let, initialize a variable identified as "counter" and set the value to 0
// STEP 4: instantiate a for loop;
//            to START: let i = 0; using let, initialize a variable identified as "i" and set it to 0;
//            to STOP: i < word.length; such that while i < word.length we iterate over each element of word then terminate;
//            to STEP: i++ to use increment operator on i
  // STEP 5: instantiate an if statement:
  //            the CONDITION: string method includes to check if vowels are in the word
  //            the EXECUTION: increment count with the ++ operator
// STEP 6: return counter

//mostVowels----------------------------------------------------------------------

// STEP 1: declare a function identified as mostVowels with parameter sentence, then inside the block:
// STEP 2: using let instantiate an empty object identified as "counts"
// STEP 3: using let initialize an array identified as "words" and utilizing .split() method with " "
//          on the sentence argument such that each word is an element of the array
// STEP 4: instantiate a for loop;
//            to START: let i = 0; using let, initialize a variable identified as "i" and set it to 0;
//            to STOP: i < words.length; such that while i < words.length we iterate over each element of word then terminate;
//            to STEP: i++ to use increment operator on i
//            inside the block will be STEPS 5 & 6
  // STEP 5: using let initialize a variable identified as "word: and set the value words[i]
  // STEP 6: assign the object property counts[word] to the return of the invocation countVowels(word)
// STEP 7: using let, initialize a variable identified as "largestNum" and set the value to 0;
// STEP 8: using let, initialize a variable identified as "largestWord" and set the value to " ";
// STEP 9: instantiate a for in loop: let key in counts
// STEP 10: instantiate an if statement:
//            the CONDITION: counts[key] > largestNum
//            the EXECUTION: largestNum = counts[key]
//                           largestWord = key;
// STEP 10: return largestWord
