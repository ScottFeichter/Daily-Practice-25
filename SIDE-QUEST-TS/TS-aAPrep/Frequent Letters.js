//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Frequent Letters

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function frequentLetters// Write a function frequentLetters that takes in a string and returns an array containing the characters that appeared more than twice in a string. that takes in a string and returns an array containing the characters that appeared more than twice in a string.

//--------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function frequentLetters(string) {
  let ans = [];
  let count = {};

  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }

  for (let k in count) {
    if (count[k] > 2) {
      ans.push(k);
    }
  }
  return ans;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

function frequentLetters(string) {
  let count = {};

  for(let i = 0; i < string.length; i++){
    if(!count[string[i]]){
      count[string[i]] = 1;
    }
    else{
      count[string[i]] += 1;
    }
  }

  let frequents = [];

  for(let key in count){
    if(count[key] > 2){
      frequents.push(key);
    }
  }

  return frequents;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(frequentLetters("mississippi")); //['i', 's']
console.log(frequentLetters("bootcamp")); //[]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

