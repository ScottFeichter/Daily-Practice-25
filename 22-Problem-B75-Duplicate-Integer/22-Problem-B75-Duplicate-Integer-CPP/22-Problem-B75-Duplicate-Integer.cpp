// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false

// C++ has user defined types that are defined by the user or compiler in the program

// https://www.learncpp.com/cpp-tutorial/introduction-to-program-defined-user-defined-types/ states:

// The C++ language standard uses the term “user-defined type” in a non-conventional manner. In the language standard, a “user-defined type” is any class type or enumerated type that is defined by you, the standard library, or the implementation (e.g. types defined by the compiler to support language extensions). Perhaps counter-intuitively, this means std::string (a class type defined in the standard library) is considered to be a user-defined type!

// To provide additional differentiation, the C++20 language standard helpfully defines the term “program-defined type” to mean class types and enumerated types that are not defined as part of the standard library, implementation, or core language. In other words, “program-defined types” only include class types and enum types that are defined by us (or a third-party library).

// Consequently, when talking only about class types and enum types that we’re defining for use in our own programs, we’ll prefer the term “program-defined”, as it has a more precise definition.



// there are two categories of programed defined types
// each category has some selection of types

// C++ USER DEFINED PROGRAM DEFINED TYPES:

// Enumerated types:
// - unscoped enumerators
// - scoped enumerators

// Class types:
// - structs
// - classes
// - unions

// ================================================================================
// I got caught up on finding C++ references and creating the discord channel. Then I asked chagpt and here is the reply:

// Here is a solution to the problem in C++ using a `std::unordered_set` to efficiently check for duplicates:

// ```cpp
// #include <iostream>
// #include <vector>
// #include <unordered_set>

// bool containsDuplicate(const std::vector<int>& nums) {
//     std::unordered_set<int> seen;
//     for (int num : nums) {
//         // If the number is already in the set, we found a duplicate
//         if (seen.find(num) != seen.end()) {
//             return true;
//         }
//         // Otherwise, add the number to the set
//         seen.insert(num);
//     }
//     // If no duplicates were found, return false
//     return false;
// }

// int main() {
//     std::vector<int> nums = {1, 2, 3, 4, 5, 6, 2};
//     if (containsDuplicate(nums)) {
//         std::cout << "The array contains duplicates." << std::endl;
//     } else {
//         std::cout << "The array does not contain duplicates." << std::endl;
//     }
//     return 0;
// }
// ```

// ### Explanation:
// 1. **`std::unordered_set`**: This is a hash table implementation in C++. It allows for constant time complexity (on average) for insertions and lookups.
// 2. **Iterate through the array**: For each number, check if it already exists in the set.
// 3. **Return early if duplicate found**: If a number is already in the set, return `true`.
// 4. **No duplicates**: If the loop finishes without finding duplicates, return `false`.

// ### Complexity:
// - **Time Complexity**: \(O(n)\), where \(n\) is the size of the array, because each lookup and insertion operation in the set is \(O(1)\) on average.
// - **Space Complexity**: \(O(n)\), because the set may contain up to \(n\) unique elements.




// ================================================================================
// Then I asked it to solve using an associative array:

// Here’s a solution using an associative array (a `std::map` in C++):

// ```cpp
// #include <iostream>
// #include <vector>
// #include <map>

// bool containsDuplicate(const std::vector<int>& nums) {
//     std::map<int, int> countMap;

//     for (int num : nums) {
//         // Increment the count of the current number
//         countMap[num]++;

//         // If the count becomes greater than 1, a duplicate is found
//         if (countMap[num] > 1) {
//             return true;
//         }
//     }

//     // If no duplicates were found, return false
//     return false;
// }

// int main() {
//     std::vector<int> nums = {1, 2, 3, 4, 5, 6, 2};
//     if (containsDuplicate(nums)) {
//         std::cout << "The array contains duplicates." << std::endl;
//     } else {
//         std::cout << "The array does not contain duplicates." << std::endl;
//     }
//     return 0;
// }
// ```

// ### Explanation:
// 1. **`std::map`**:
//    - A `std::map` is an associative container that stores key-value pairs, where the key is the number from the array and the value is its frequency (how many times it appears in the array).
//    - It automatically keeps keys sorted but has a higher time complexity than `std::unordered_map`.

// 2. **Iterating through the array**:
//    - For each number in the array, increment its count in the map.
//    - If the count exceeds 1, return `true` immediately.

// 3. **No duplicates**:
//    - If the loop completes without finding any count greater than 1, return `false`.

// ### Complexity:
// - **Time Complexity**: \(O(n \log n)\), where \(n\) is the size of the array. This is because each insertion into a `std::map` takes \(O(\log n)\) due to its internal balanced tree structure.
// - **Space Complexity**: \(O(n)\), for storing up to \(n\) unique elements in the map.


// ================================================================================
// Can I pass an array instead of vector?

// Yes, you can solve the problem using a plain C-style array instead of a `std::vector`. Since C-style arrays do not have a built-in size property, you will need to pass the array and its size as separate arguments. Here's the solution:

// ### Code Using an Associative Array (`std::map`):

// ```cpp
// #include <iostream>
// #include <map>

// bool containsDuplicate(const int nums[], int size) {
//     std::map<int, int> countMap;

//     for (int i = 0; i < size; ++i) {
//         // Increment the count of the current number
//         countMap[nums[i]]++;

//         // If the count becomes greater than 1, a duplicate is found
//         if (countMap[nums[i]] > 1) {
//             return true;
//         }
//     }

//     // If no duplicates were found, return false
//     return false;
// }

// int main() {
//     int nums[] = {1, 2, 3, 4, 5, 6, 2};
//     int size = sizeof(nums) / sizeof(nums[0]); // Calculate the size of the array

//     if (containsDuplicate(nums, size)) {
//         std::cout << "The array contains duplicates." << std::endl;
//     } else {
//         std::cout << "The array does not contain duplicates." << std::endl;
//     }

//     return 0;
// }
// ```

// ### Explanation:
// 1. **C-Style Array**:
//    - The array `nums` is passed as a pointer (C-style arrays decay to pointers when passed to a function).
//    - The size of the array must be passed separately because plain arrays don't carry size information.

// 2. **Using `std::map`**:
//    - The solution logic is identical to the `std::vector` version. We use a `std::map` to count occurrences of each number in the array.

// 3. **Size Calculation**:
//    - Inside `main`, the size of the array is determined using `sizeof(nums) / sizeof(nums[0])`.

// ### Complexity:
// - **Time Complexity**: \(O(n \log n)\) because each insertion into the `std::map` takes \(O(\log n)\).
// - **Space Complexity**: \(O(n)\) for storing the counts in the map.

// This approach works well if you are constrained to using plain arrays instead of `std::vector`.








#include <iostream>
#include <vector>
#include <unordered_set>
#include <map>
using namespace std;

// ============

bool containsDuplicateUsingStruct(vector<int> nums){ // this is passing by value???
  struct {} Counter;

//   int length = sizeof(nums) / sizeof(nums[0]); // this is for arrays

  int lenth = nums.size() // this is for vectors

  for (int i = 0; i < length; i++) {



  }


  return false;
}


// ============

bool containsDuplicateUsingSet(const vector<int>& nums) { // this is passing by reference and is preferred because it prevents unnecessary copying and guarantees the vector won't be modified???

    std::unordered_set<int> seen;
    for (int num : nums) {
        // If the number is already in the set, we found a duplicate
        if (seen.find(num) != seen.end()) {
            return true;
        }
        // Otherwise, add the number to the set
        seen.insert(num);
    }
    // If no duplicates were found, return false
    return false;
}

// ============

bool containsDuplicateUsingMap(const std::vector<int>& nums) {
    std::map<int, int> countMap;

    for (int num : nums) {
        // Increment the count of the current number
        countMap[num]++;

        // If the count becomes greater than 1, a duplicate is found
        if (countMap[num] > 1) {
            return true;
        }
    }

    // If no duplicates were found, return false
    return false;
}

// ================================================================================

int main() {

    const vector<int> nums1 = {0, 1, 2, 3};  // no dups
    const vector<int> nums2 = {1, 2, 3, 3};  // one dup
    const vector<int> nums3 = {1, 1, 2, 2, 3}; // two dups
    const vector<int> nums4 = {1, 2, 3, 3, 3}; // a triple dup
    const vector<int> nums5 = {}; // edge empty vector
    const vector<int> nums6 = {1}; // edge single element vector

    cout << containsDuplicateUsingSet(nums1) <<endl; // false
    cout << containsDuplicateUsingSet(nums2) <<endl; // true
    cout << containsDuplicateUsingSet(nums3) <<endl; // true
    cout << containsDuplicateUsingSet(nums4) <<endl; // true
    cout << containsDuplicateUsingSet(nums5) <<endl; // false
    cout << containsDuplicateUsingSet(nums6) <<endl; // false


    cout << containsDuplicateUsingMap(nums1); //false
    cout << containsDuplicateUsingMap(nums2); //true
    cout << containsDuplicateUsingMap(nums3); //true
    cout << containsDuplicateUsingMap(nums4); //true
    cout << containsDuplicateUsingMap(nums5); //false
    cout << containsDuplicateUsingMap(nums6); //false



  return 0;
}
