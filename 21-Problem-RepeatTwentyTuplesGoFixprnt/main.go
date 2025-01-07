package main

import (
	"fmt"
	"math/rand"
	"time"
)

func incrementNint(num int) int {
	var local_num int = num;
	if(num > 5){

	  // Seed the random number generator
	  rand.Seed(time.Now().UnixNano())

	  var adder int = rand.Intn(10) + 1;
	  var loops int = rand.Intn(10) + 1;

	  for loops > 0 {
		local_num+=adder;
		adder++;
		loops--;
	  }
	}
	return local_num;
  }

func main() {

	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())

	const NINT int = rand.Intn(10) + 1;
	const FLOTE float32 = 32.32;
	const CHR string = "c";
	const STR string = "String";
	const BOO bool = true;

	var undv int;

	var nums = [4]int{1, 2, 3}; // this is a simple array
	var flotes = [4]float32{11.11, 22.22, 33.33, 44.44}; // but go has something called slices
	var chars = [4]string{"a", "b", "c", "d"}; // that I don"t entirely understand yet
	var stirs = [4]string{"This", "is", "stirs", "array"}; // but they seem to be widely utilized
	var boos = [4]bool{true, false, false, true}; // instead of simple arrays


	var unda = [0]int{};

	var mixtinterface = []interface{}{0, "b", "three", false}; // this is an interface as Go does not have mixed type arrays or tuples

	fmt.Printf("NINT: %d FLOTE: %.2f CHR: %c STR: %s BOO: %t undv: %v\n", NINT, FLOTE, CHR, STR, BOO, undv)
	fmt.Printf("nums: %v flotes: %v chars: %s stirs: %v boos: %v mixta: %v unda: %v\n",
		nums,
		flotes,
		chars,
		stirs,
		boos,
		mixtinterface,
		unda,
	)
	fmt.Printf("incrementNint(NINT): %d\n", incrementNint(NINT))








}
