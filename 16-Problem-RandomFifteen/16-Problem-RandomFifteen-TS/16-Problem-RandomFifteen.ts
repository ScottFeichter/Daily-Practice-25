// Do everything in problem 15 but make the int generated from randome between 1 - 10


function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const nint: number = getRandomInteger(1, 10);
const flote: number = 32.32;
const chr: string = 'c';
const str: string = 'str';
const boo: boolean = true;


const incrementNint = (num: number) => {
  let local_nuNint: number = nint;
  if (nint > 5) {
    let adder: number = getRandomInteger(1, 10);
    let loops: number = getRandomInteger(1, 10);

    console.log(`adder: ${adder}`);
    console.log(`loops: ${loops}`);

    while (loops > 0) {
      local_nuNint+= adder;
      adder++;
      loops--;
    }
  }
  return local_nuNint;
}

console.log(`nint: ${nint} flote: ${flote} chr: ${chr} str: ${str} boo: ${boo}`);
console.log(`incrementNint(nint): ${incrementNint(nint)}`);
