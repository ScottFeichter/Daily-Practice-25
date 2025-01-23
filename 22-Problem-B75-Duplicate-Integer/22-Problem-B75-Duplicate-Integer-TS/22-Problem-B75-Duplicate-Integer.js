// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false
var nums1 = [0, 1, 2, 3]; // no dups
var nums2 = [1, 2, 3, 3]; // one dup
var nums3 = [1, 1, 2, 2, 3]; // two dups
var nums4 = [1, 2, 3, 3, 3]; // a triple dup
var nums5 = []; // edge empty array
var nums6 = [1]; // edge single element array
var nums7 = [1, 'a', 3.3, "four!", 1]; // not applicable because should be only nums
// use hashmap or set to keep track of seen nums as we iterate through array
// if we see a num that is already in the hashmap/set, return true
// if we iterate through entire array and don't see a dup, return false
// both are O(n) time complexity and O(n) space complexity
var containsDuplicate = function (nums) {
    // should we be checking for array of mixed type?
    var seenNums = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (seenNums.has(num))
            return true;
        seenNums.add(num);
    }
    return false;
};
// or
var hasDuplicate = function (nums) {
    // should we be checking for array of mixed type?
    var seenNums = [];
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var num = nums_2[_i];
        if (seenNums[num])
            return true;
        seenNums[num] = true;
    }
    return false;
};
console.log(containsDuplicate(nums1)); // false
console.log(containsDuplicate(nums2)); // true
console.log(containsDuplicate(nums3)); // true
console.log(containsDuplicate(nums4)); // true
console.log(containsDuplicate(nums5)); // false
console.log(containsDuplicate(nums6)); // false
console.log(containsDuplicate(nums7)); // true ***

console.log(hasDuplicate(nums1)); // false
console.log(hasDuplicate(nums2)); // true
console.log(hasDuplicate(nums3)); // true
console.log(hasDuplicate(nums4)); // true
console.log(hasDuplicate(nums5)); // false
console.log(hasDuplicate(nums6)); // false
console.log(hasDuplicate(nums7)); // true ***
