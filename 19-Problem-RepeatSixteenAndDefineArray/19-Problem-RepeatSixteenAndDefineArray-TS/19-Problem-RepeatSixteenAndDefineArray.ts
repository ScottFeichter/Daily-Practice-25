// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans


const NINT: number = Math.floor(Math.random() * (10 -1) + 1);
const FLOTE: number = 32.32;
const CHR: string = 'c';
const STR: string = "string";
const BOO: boolean = false;

let nums: number[] = [0, 1, 2, 3];
let flotes: number[] = [11.11, 22.22, 33.33, 44.44];
let chars: string[] = ['a', 'b', 'c', 'd'];
let stirs: string[] = ["Hello", "World", "I", "am", "Scott"];
let boos: boolean[] = [true, false, false, true];

const incrementNint = (num: number) => {
  if(num > 5){
    let adder = Math.floor(Math.random() * (10 -1) + 1);
    let loops = Math.floor(Math.random() * (10 -1) + 1);

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
