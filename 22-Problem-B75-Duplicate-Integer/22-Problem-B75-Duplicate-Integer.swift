// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false


let nums1: [Int] = [0, 1, 2, 3]; // no dups
let nums2: [Int] = [1, 2, 3, 3]; // one dup
let nums3: [Int] = [1, 1, 2, 2, 3]; // two dups
let nums4: [Int] = [1, 2, 3, 3, 3]; // a triple dup
let nums5: [Int] = []; // edge empty array
let nums6: [Int] = [1]; // edge single element array
// let nums7: [Int] = [1, 'a', 3.3, "four!", 1]; // not applicable because should be only nums

// use hashmap or set to keep track of seen nums as we iterate through array
// if we see a num that is already in the hashmap/set, return true
// if we iterate through entire array and don't see a dup, return false
// both are O(n) time complexity and O(n) space complexity


func containsDuplicate(nums: [Int]) -> Bool {
    var seenNums: [Int: Bool] = [:];
    for num in nums {
        if seenNums[num] != nil {
            return true
        } else {
            seenNums[num] = true;
        }
    }
    return false;
}

func hasDuplicate(nums: [Int]) -> Bool {
    var seenNums = Set<Int>();
    for num in nums {
        if seenNums.contains(num) {
            return true
        } else {
            seenNums.insert(num);
        }
    }
    return false;
}



print(containsDuplicate(nums: nums1)); // false
print(containsDuplicate(nums: nums2)); // true
print(containsDuplicate(nums: nums3)); // true
print(containsDuplicate(nums: nums4)); // true
print(containsDuplicate(nums: nums5)); // false
print(containsDuplicate(nums: nums6)); // false
// print(containsDuplicate(nums7)); // true ***


print(hasDuplicate(nums: nums1)); // false
print(hasDuplicate(nums: nums2)); // true
print(hasDuplicate(nums: nums3)); // true
print(hasDuplicate(nums: nums4)); // true
print(hasDuplicate(nums: nums5)); // false
print(hasDuplicate(nums: nums6)); // false
// print(hasDuplicate(nums7)); // true ***
