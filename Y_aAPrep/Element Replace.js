//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Element Replace

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method element_replace that takes in an array and an object.
// The method should return a new array where elements of the original array are replaced with their corresponding values in the object.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function element_replace(arr, obj) {
  let newArr = [];
  let check = "no";
  for (let i = 0; i < arr.length; i++) {
    check = "no";
    for (let k in obj) {
      if (arr[i] === k) {
        newArr.push(obj[k])
        check = "yes";
      }
    }
    if (check === "no") {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
obj1 = {"Serena Williams": "tennis", "LeBron James": "basketball"};

element_replace(arr1, obj1); // ["basketball", "Lionel Messi", "tennis"]


arr2 = ["dog", "cat", "mouse"];
obj2 = {"dog": "bark", "cat": "meow", "duck": "quack"};

element_replace(arr2, obj2); // ["bark", "meow", "mouse"]


//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

