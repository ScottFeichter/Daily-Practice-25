// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean; // this an anonymous function takes num arg returns bool
// };
// function myFunc(someArg: number) { // ts recognizes this matches DescribaleFunction type alias
//   return someArg > 3;
// }
// myFunc.description = "default description"; // ts recognizes this matches DescribaleFunction type alias
// console.log(myFunc);
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }
// doSomething(myFunc);
// function firstElement(arr: any[]) {
//   return arr[0];
// }
function firstElement(arr) {
    return arr[0];
}
// s is of type 'string'
var s = firstElement(["a", "b", "c"]);
console.log(s);
// n is of type 'number'
var n = firstElement([1, 2, 3]);
console.log(n);
// u is of type undefined
var u = firstElement([]);
console.log(u);
