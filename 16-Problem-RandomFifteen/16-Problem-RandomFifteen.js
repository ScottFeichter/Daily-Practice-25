// Do everything in problem 15 but make the int generated from randome between 1 - 10

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const nint = getRandomInteger(1, 10);
const flote = 32.32;
const chr = 'c';
const str = 'str';
const boo = true;


const incrementNint = (num) => {
  let local_nuNint = nint;
  if (nint > 5) {
    let adder = getRandomInteger(1, 10);
    let loops = getRandomInteger(1, 10);

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
