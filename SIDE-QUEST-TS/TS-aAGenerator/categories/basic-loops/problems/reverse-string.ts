/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

const reverseString = (str: string): string => {
  let reversed: string = "";

  for(let i = str.length -1; i >= 0; i--) {
    reversed+=str[i];
  }


  return reversed;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
