/*
Define a function combineArrays that takes in two parameters. Both parameters
should be arrays of numbers. The function should return the two arrays combined
into a single array where the first array's elements comes before the second
array's elements. Research and use the Array.concat method on MDN.
*/

const combineArrays = (nums1: number[], nums2: number[]): number[] => {
  return [...nums1, ...nums2];
}


console.log(combineArrays([1, 2], [3, 4]));       // => [1, 2, 3, 4]
console.log(combineArrays([17, 5, 11], [6, 7]));  // => [17, 5, 11, 6, 7]
console.log(combineArrays([], [10]));             // => [10]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = combineArrays;
