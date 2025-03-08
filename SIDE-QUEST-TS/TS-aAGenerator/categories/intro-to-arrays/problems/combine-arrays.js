/*
Define a function combineArrays that takes in two parameters. Both parameters
should be arrays of numbers. The function should return the two arrays combined
into a single array where the first array's elements comes before the second
array's elements. Research and use the Array.concat method on MDN.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var combineArrays = function (nums1, nums2) {
    return __spreadArray(__spreadArray([], nums1, true), nums2, true);
};
console.log(combineArrays([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArrays([17, 5, 11], [6, 7])); // => [17, 5, 11, 6, 7]
console.log(combineArrays([], [10])); // => [10]
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = combineArrays;
