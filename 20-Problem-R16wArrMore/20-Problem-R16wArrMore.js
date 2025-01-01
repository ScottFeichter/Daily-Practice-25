// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible


const NINT = Math.floor(Math.random() * (10 -1) + 1);
const FLOTE = 32.32;
const CHR = 'c';
const STR = "String";
const BOO = true;

let undv;

let nums = [0, 1, 2, 3];
let flotes = [11.11, 22.22, 33.33, 44.44];
let chars = ['a', 'b', 'c', 'd'];
let stirs = ["This", "is", "stirs", "array"];
let boos = [true, false, false, true];

let mixta = [0, 'b', "three", false];
let unda = [];

const incrementNint = (num) => {
  if(num > 5){
    let adder = Math.floor(Math.random() * (10 -1) + 1);
    let loops = Math.floor(Math.random() * (10 -1) + 1);

    while(loops > 0){
      num+=adder;
      adder++;
      loops--;
    }
  }
  return num;
}

console.log(`NINT: ${NINT} FLOTE: ${FLOTE} CHR: ${CHR} STR: ${STR} BOO: ${BOO} undv: ${undv}`);
console.log(`nums: ${nums} chars: ${chars} stirs: ${stirs} boos: ${boos} mixta: ${mixta} unda: ${unda}`);
console.log(`incrementNint(NINT): ${incrementNint(NINT)}`);
