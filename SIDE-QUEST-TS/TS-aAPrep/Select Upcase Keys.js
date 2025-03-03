//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Select Upcase Keys

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function selectUpcaseKeys that takes in an object and returns a new object containing key-value pairs of the
// original object that had uppercase keys.
// You can assume that the keys will always be strings.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function selectUpcaseKeys(obj) {
  outObj = {};
  for (let k in obj) {
    if (isUpCase(k)) {
      outObj[k] = obj[k];
    }
  }
  return outObj;
}

function isUpCase(word) {
  let lowcase = "abcedefghijklmnopqrstuvwxyz";
  for (let i = 0; i < word.length; i++) {
    if (lowcase.includes(word[i])) {
      return false;
    }
  }
  return true;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(selectUpcaseKeys({"make" :  "Tesla", "MODEL" : "S", "Year" : 2018, "SEATS" : 4})); // {"MODEL" : "S", "SEATS" : 4}
console.log(selectUpcaseKeys({"DATE" : "July 4th","holiday" : "Independence Day", "type" : "Federal"})); // {"DATE" : "July 4th"}

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

