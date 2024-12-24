// Repeat problem 16 to work in the rote memorization of declaring most types, generating random numbers in a range, declaring a functions, using loops, using conditionals, and printing to console.


const nint: number = Math.floor(Math.random() * (10 - 1) + 1);
const flote: number = 32.32;
const chr: string = 'c';
const str: string = "hello";
const boo: boolean = true;


const incrementNint = (num: number) => {
  if(num > 5) {

    let adder: number = Math.floor(Math.random() * (10 - 1) + 1);
    let loops: number = Math.floor(Math.random() * (10 - 1) + 1);

    while (loops > 0) {
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num;
}



console.log(`nint: ${nint} flote: ${flote} chr: ${chr} str: ${str} boo: ${boo}`);
console.log(`incrementNint(nint): ${incrementNint(nint)}`);
