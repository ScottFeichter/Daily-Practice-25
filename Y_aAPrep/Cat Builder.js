//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Cat Builder

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function catBuilder that takes in a name, color, and age.
// The method should return an object representing a cat with those values.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function catBuilder(name, color, age) {
  let outObj = {};
  outObj.name = name;
  outObj.color = color;
  outObj.age = age;
  return outObj;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//


console.log(catBuilder("Whiskers", "orange", 3)); // {"name" : "Whiskers", "color" : "orange", "age" : 3}
console.log(catBuilder("Salem", "black", 100)); // {"name" : "Salem", "color" : "black", "age" : 100}


//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

