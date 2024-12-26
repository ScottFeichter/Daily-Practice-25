// Repeat problem 16 again to work rote memory of basic syntax.

const NINT = Math.floor(Math.random() * (10 - 1) + 1);
const FLOTE = 32.32;
const CHR = 'c';
const STR = 'String';
const BOO = true;

const incrementNint = (num) => {
  if(num > 5) {
    let adder = Math.floor(Math.random() * (10 - 1) + 1);
    let loops = Math.floor(Math.random() * (10 - 1) + 1);

    while(loops > 0) {
      num+= adder;
      adder++;
      loops--;
    }
  }
  return num;
}

console.log(`NINT: ${NINT} FLOTE: ${FLOTE} CHR: ${CHR} STR: ${STR} BOO: ${BOO}`);
console.log(`incrementNint(NINT): ${incrementNint(NINT)}`);


