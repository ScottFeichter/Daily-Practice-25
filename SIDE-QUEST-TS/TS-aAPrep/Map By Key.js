//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Map By Key

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function mapByKey that takes an array of objects and a key string.
// The function should return a new array containing the values from each object for the given key.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function mapByKey(arr, key) {
  let ans = arr.map((ele) => {
    return ele[key];
  })

  return ans;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//


function mapByKey(arr, key) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i][key]);
  }

  return ans;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(mapByKey(locations, "state")); //["New York", "California", "Oregon"]
console.log(mapByKey(locations, "city")); //["New York City", "San Francisco", "Portland"]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

// iterate through array using .map
// create a callback that compares the given key to each object to return the value
// return new mapped array
