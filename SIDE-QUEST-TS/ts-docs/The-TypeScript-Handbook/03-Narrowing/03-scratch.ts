






function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}


// console.log(multiplyAll([1,2,3], 3));
// console.log(multiplyAll(undefined, 3));
// console.log(multiplyAll(null, 3));
// console.log(multiplyAll([], 3));
// console.log(Boolean([]));
// console.log(multiplyAll(3));

let empty = [];
let stirnotempty = "test";
let stirempty = "";
let stirspaceempty = " ";

console.log(!!empty);
console.log(!!stirnotempty);
console.log(!!stirempty);
console.log(!!stirspaceempty);

// console.log(!![]);
// console.log(!!("test"));


