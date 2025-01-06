// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible

const NINT: number = Math.floor(Math.random() * (10 -1) + 1);
const FLOTE: number = 32.32;
const CHR: string = 'c';
const STR: string = "string";
const BOO: boolean = false;

let undv: number;

let nums: number[] = [0, 1, 2, 3];
let flotes: number[] = [11.11, 22.22, 33.33, 44.44];
let chars: string[] = ['a', 'b', 'c', 'd'];
let stirs: string[] = ["Hello", "World", "I", "am", "Scott"];
let boos: boolean[] = [true, false, false, true];

let mixta = [0, 'b', "three", false];
let unda: any[] = [];

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


console.log(`NINT: ${NINT} FLOTE: ${FLOTE} CHR: ${CHR} STR: ${STR} BOO: ${BOO} undv: ${undv}`);
console.log(`nums: ${nums} chars: ${chars} stirs: ${stirs} boos: ${boos} mixta: ${mixta} unda: ${unda}`);
console.log(`incrementNint(NINT): ${incrementNint(NINT)}`);
