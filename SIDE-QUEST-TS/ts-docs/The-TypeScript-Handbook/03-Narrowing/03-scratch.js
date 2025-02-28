function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
// console.log(multiplyAll([1,2,3], 3));
// console.log(multiplyAll(undefined, 3));
// console.log(multiplyAll(null, 3));
// console.log(multiplyAll([], 3));
// console.log(Boolean([]));
// console.log(multiplyAll(3));
var empty = [];
var stirnotempty = "test";
var stirempty = "";
var stirspaceempty = " ";
console.log(!!empty);
console.log(!!stirnotempty);
console.log(!!stirempty);
console.log(!!stirspaceempty);
// console.log(!![]);
// console.log(!!("test"));
