function moreThanThree(sentence) {
  let count = letterCounter(sentence);
  let ans = [];
  for (let k in count) {
    if ((count[k] >= 3) && (k !== " ")) {
      ans.push(k);
    }
  }
  return ans;
}

function letterCounter(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }
  return count;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(moreThanThree( "the jeepe rolled down thhhe hill"));  // [ 'h', 'e', 'l' ]
console.log(moreThanThree( "your royal highness is high"));  // [ 'h', 'i', 's' ]
