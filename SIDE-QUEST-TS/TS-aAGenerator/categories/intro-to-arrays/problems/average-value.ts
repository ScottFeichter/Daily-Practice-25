/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

const avgVal = (nums: number[]): number | null => {

  if (nums.length === 0) return null;

  let sum: number = 0;

  for(let num of nums) {
    sum+=num;
  }

  return sum;

}

console.log(avgVal([5, 10]));         // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;
