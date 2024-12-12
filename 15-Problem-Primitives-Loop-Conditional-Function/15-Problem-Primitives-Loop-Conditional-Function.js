// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.


const nint = 7;
const flote = 32.32;
const chr = 'c';
const str = 'string';
const boo = false;

let count = 0;

const incrementCount = (num) => {
  if (num > 5) {
    let adder = 3;
    let loops = num;

    while (loops > 0) {
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num;
}

console.log(`nint: ${nint} flote: ${flote} chr: ${chr} str: ${str} boo: ${boo}`);
console.log(`incrementCount(nint): ${incrementCount(nint)}`);
console.log(`incrementCount(flote): ${incrementCount(flote)}`);
