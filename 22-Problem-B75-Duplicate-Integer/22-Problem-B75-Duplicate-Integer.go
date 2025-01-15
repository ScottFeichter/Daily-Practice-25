
// arrays have fixed size in go - slices do not

package main

import (
	"fmt"
)

func containsDuplicate(nums []int) bool {
	// should we be checking for array of mixed type?
		var seenNums = make(map[int]bool);

		for _, num := range nums {
			if seenNums[num] {
				return true
			}
			seenNums[num] = true
		}


		return false
}


	// no sets in go lang so rather than implement set in hash just skip it



func main() {


	var nums1 = []int{0, 1, 2, 3};
	var nums2 = []int{1, 2, 3, 3} // one dup
	var nums3 = []int{1, 1, 2, 2, 3} // two dups
	var nums4 = []int{1, 2, 3, 3, 3} // a triple dup
	var nums5 = []int{} // edge empty array
	var nums6 = []int{1} // edge single element array
	// const nums7 = [4]int{1, 'a', 3.3, "four!", 1} // not applicable because should be only nums


	fmt.Println(containsDuplicate(nums1)) // false
	fmt.Println(containsDuplicate(nums2)) // true
	fmt.Println(containsDuplicate(nums3)) // true
	fmt.Println(containsDuplicate(nums4)) // true
	fmt.Println(containsDuplicate(nums5)) // false
	fmt.Println(containsDuplicate(nums6)) // false
	// console.log(containsDuplicate(nums7)) // true ***

}
