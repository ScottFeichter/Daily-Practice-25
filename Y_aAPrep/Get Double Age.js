//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Get Double Age

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method getDoubleAge that takes in an object and returns twice the "age" value of the hash.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function getDoubleAge(obj) {
  return obj["age"] * 2;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(getDoubleAge({"name" : "App Academy", "age" : 5})); // 10
console.log(getDoubleAge({"name" : "Ruby", "age" : 23}));       // 46

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//
