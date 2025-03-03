//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Object To Pairs

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function objectToPairs that takes in a hash and returns a 2D array representing each key-value pair of the hash.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function objectToPairs(obj) {
  let outArr = [];
  for (let k in obj) {
    let temp = [];
    temp.push(k);
    temp.push(obj[k]);
    outArr.push(temp);
  }
  return outArr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(objectToPairs({"name" : "skateboard", "wheels" : 4, "weight" : "7.5 lbs"})); // [["name", "skateboard"], ["wheels", 4], ["weight", "7.5 lbs"]]
console.log(objectToPairs({"kingdom" : "animalia", "genus" : "canis", "breed" : "German Shepherd"})); // [["kingdom", "animalia"], ["genus", "canis"], ["breed", "German Shepherd"]]


//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

