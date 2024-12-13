// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.

const nint: number = 7;
const flote: number = 32.32;
const chr: string = 'c';
const str: string = "hello";
const boo: boolean = false;

function incrementCount(num: number) {

  if(num > 5) {
    let adder: number = 3;
    let loops: number = num;
    while (loops > 0) {
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num


}

console.log(`nint: ${nint} flote: ${flote} chr: ${chr} str: ${str} boo: ${boo}`);
console.log(`incrementCount(nint): ${incrementCount(nint)}`);
