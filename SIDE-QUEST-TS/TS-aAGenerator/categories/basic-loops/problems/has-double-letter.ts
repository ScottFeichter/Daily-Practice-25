/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
*/

const hasDoubleLetter = (str: any): boolean | null => {
  if(typeof str !== "string") return null;

  for(let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) return true;
  }

return false;

}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasDoubleLetter;
