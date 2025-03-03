//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Retrieve Values

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function retrieveValues that takes in two objects and a key.
// The method should return an array containing the values from the two objects that correspond with the given key.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function retrieveValues(obj1, obj2, key) {
  let outArr = [obj1[key], obj2[key]];
  return outArr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

let dog1 = {name: "Fido", color: "brown"};
let dog2 = {name : "Spot", color : "white"};

console.log(retrieveValues(dog1, dog2, "name")); // ["Fido", "Spot"]
console.log(retrieveValues(dog1, dog2, "color")); // ["brown", "white"]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

