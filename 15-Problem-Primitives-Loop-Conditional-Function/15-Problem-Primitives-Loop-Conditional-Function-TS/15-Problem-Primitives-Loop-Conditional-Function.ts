// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.

const nint: Number = 7;
const flote: Number = 32.32;
const chr: String = 'c';
const str: String = "hello";
const boo: Boolean = false;

function incrementCount(num: number) {

  if(num > 5) {
    let adder = 3;
    let loops = num;
    while (loops > 0) {
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num


}

