/*
Define a function multiplesOfFive that takes in a number parameter. It should
return a count of all numbers greater than or equal to 0 and less than the
number parameter that are multiples of 5.
*/

const multiplesOfFive = (num: number): number => {
  let count = 0;
  for(let i = 0; i < num; i++) {
    if(i % 5 === 0) count++;
  }
  return count;
}

console.log(multiplesOfFive(20)); // => 4    // 0, 5, 10, 15
console.log(multiplesOfFive(10)); // => 2    // 0, 5
console.log(multiplesOfFive(14)); // => 3    // 0, 5, 10
console.log(multiplesOfFive(21)); // => 5    // 0, 5, 10, 15, 20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = multiplesOfFive;
