// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans

const NINT = Math.floor(Math.random(10 -1) + 1);
const FLOTE = 32.32;
const CHR = 'c';
const STR = "String";
const BOO = false;

let nums = [0, 1, 2, 3];
let chars = ['a', 'b', 'c', 'd'];
let stirs = ["Hello", "World", "I", "am", "Scott"];
let boos = [true, false, false, true];

const incrementNint = (num) => {
  if(num > 5){
    let adder = Math.floor(Math.random(10 -1) + 1);
    let loops = Math.floor(Math.random(10 -1) + 1);

    while(loops > 0){
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num
}


console.log(`NINT: ${NINT} FLOTE: ${FLOTE} CHR: ${CHR} STR: ${STR} BOO: ${BOO}`);
console.log(`nums: ${nums} chars: ${chars} stirs: ${stirs} boos: ${boos}`);
console.log(`incrementNint(NINT): ${incrementNint(NINT)}`);
