# Given an integer array nums, return true if any value appears more than once in the array, otherwise return false

nums1 = [0, 1, 2, 3] # no dups
nums2 = [1, 2, 3, 3] # one dup
nums3 = [1, 1, 2, 2, 3] # two dups
nums4 = [1, 2, 3, 3, 3] # a triple dup
nums5 = [] # edge empty array
nums6 = [1] # edge single element array
nums7 = [1, 'a', 3.3, "four!", 1] # not applicable because should be only nums

def containsDuplicate(nums):
    seenNums = {}
    for num in nums:
        if num in seenNums:
            return True
        else: seenNums[num] = True
    return False

def hasDuplicate(nums):
    seenNums = set()
    for num in nums:
        if num in seenNums:
            return True
        else: seenNums.add(num)
    return False

print(containsDuplicate(nums1)) # false
print(containsDuplicate(nums2)) # true
print(containsDuplicate(nums3)) # true
print(containsDuplicate(nums4)) # true
print(containsDuplicate(nums5)) # false
print(containsDuplicate(nums6)) # false
print(containsDuplicate(nums7)) # true ***


print(hasDuplicate(nums1)) # false
print(hasDuplicate(nums2)) # true
print(hasDuplicate(nums3)) # true
print(hasDuplicate(nums4)) # true
print(hasDuplicate(nums5)) # false
print(hasDuplicate(nums6)) # false
print(hasDuplicate(nums7)) # true ***
