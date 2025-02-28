var fName = "Scott";
var age = 45;
var isCool = false;
var nums = [1, 2, 3];
var stirs = ["one", "two", "three"];
var bools = [false, true, true];
var any = ["one", 2, false];
function greet(name) {
    console.log("hello, " + name.toUpperCase() + "!!");
}
function getFavoriteNumber() {
    return 26;
}
// async function getFavoriteNumber2(): Promise<number> {
//   return 26;
// }
// Contextual typing
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Object Types
var pt;
// Optional Properties
var point;
// Union Types
var id;
var dl = "CA Driver's License";
// narrow a union with an if block
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else
        console.log(id);
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 100, y: 100 });
