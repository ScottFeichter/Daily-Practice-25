let fName: string = "Scott";
let age: number = 45;
let isCool: boolean = false;

let nums: number[] = [1, 2, 3];
let stirs: string[] = ["one", "two", "three"];
let bools: boolean[] = [false, true, true];
let any: any[] = ["one", 2, false];


function greet(name: string) {
  console.log("hello, " + name.toUpperCase() + "!!");

}


function getFavoriteNumber(): number {
  return 26;
}

// async function getFavoriteNumber2(): Promise<number> {
//   return 26;
// }


// Contextual typing
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types
let pt: {
  x: number;
  y: number;
}

// Optional Properties
let point: {
  x: number;
  y?: number;
}

// Union Types

let id: number | string;
let dl: typeof id = "CA Driver's License";


// narrow a union with an if block

function printId(id: number | string) {
  if(typeof id ==="string") {
    console.log(id.toUpperCase());
  } else console.log(id);

}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// type aliases

type Point = {
  x: number;
  y: number;
}

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });


// interfaces

interface Point2 {
  x: number;
  y: number;
}

function printCoord3(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord3({ x: 100, y: 100 });
