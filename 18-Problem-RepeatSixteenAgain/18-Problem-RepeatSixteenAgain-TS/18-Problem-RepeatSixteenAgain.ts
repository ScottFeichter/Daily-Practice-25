// Repeat problem 16 again to work rote memory of basic syntax.

const NINT: number = Math.floor(Math.random() * (10 -1) + 1);
const FLOTE: number = 32.32;
const CHR: string = 'c';
const STR: string = "String";
const BOO: boolean = true;

const incrementNint = (num: number) => {
  if(num > 5) {
    let adder: number = Math.floor(Math.random() * (10 - 1) + 1);
    let loops: number = Math.floor(Math.random() * (10 - 1) + 1);

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
