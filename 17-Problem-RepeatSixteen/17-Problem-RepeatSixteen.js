// Repeat problem 16 to work in the rote memorization of declaring most types, generating random numbers in a range, declaring a functions, using loops, using conditionals, and printing to console.

const nint = Math.floor(Math.random() * (10 - 1)) + 1;
const flote = 32.32;
const chr = 'c';
const str = "hello";
const boo = true;

const incrementNint = (num) => {
  if(num > 5) {
    let adder = Math.floor(Math.random() * (10 - 1) + 1);
    let loops = Math.floor(Math.random() * (10 - 1) + 1);

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
