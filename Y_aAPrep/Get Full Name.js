//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Get Full Name

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function getFullName that takes in an object containing a first, last, and title.
// The function should return a string representing the hash's full name

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function getFullName(obj) {
  return `${obj["first"]} ${obj["last"]}, the ${obj["title"]}`;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

obj1 = {"first" : "Michael", "last" : "Jordan", "title" : "GOAT"};

console.log(getFullName(obj1)); // "Michael Jordan, the GOAT"

obj2 = {"first" : "Fido", "last" : "McDog", "title" : "Loyal"};

console.log(getFullName(obj2)); //  "Fido McDog, the Loyal"

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

