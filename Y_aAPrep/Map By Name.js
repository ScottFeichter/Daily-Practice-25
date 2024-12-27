//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Map By Name

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function mapByName that takes in an array of objects and returns a new array containing the names of each object.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function mapByName(inArr) {
  let outArr = [];
  for (let i = 0; i < inArr.length; i++) {
      outArr.push(inArr[i]["name"]);
  }
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//


function mapByName(inArr) {
  let outArr = inArr.map((ele) => {
    return ele["name"];
  })
  return outArr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

const pets = [
  {"type": "dog", "name": "Rolo"},
  {"type": "cat", "name": "Sunny"},
  {"type": "rat", "name": "Saki"},
  {"type": "dog", "name": "Finn"},
  {"type": "cat", "name": "Buffy"}
];

console.log(mapByName(pets)); //["Rolo", "Sunny", "Saki", "Finn", "Buffy"]

const countries = [
  {"name": "Japan", "continent": "Asia"},
  {"name": "Hungary", "continent": "Europe"},
  {"name": "Kenya", "continent": "Africa"},
];

console.log(mapByName(countries)); //["Japan", "Hungary", "Kenya"]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

// input array of obj
// iterate through the array
// for each object check the key for 'name'
// if found put the value into the output array
// output array of strings
