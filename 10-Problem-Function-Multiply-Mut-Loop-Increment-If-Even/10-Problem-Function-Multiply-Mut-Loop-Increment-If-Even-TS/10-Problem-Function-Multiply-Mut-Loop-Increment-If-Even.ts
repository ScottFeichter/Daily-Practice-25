// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

let myMut: number = 4;
const MY_IMMUT: number = 5;

const isEven = (num: number) => {
  return (num % 2 === 0);
}

const evenIncrement = (num1: number, num2: number) => {
  if(isEven(num1)) {
    while (num2 > 0) {
      num1++;
      num2--;
    }
    return num1;
  }
  return num1;
}

console.log(`myMut: ${myMut} MY_IMMUT: ${MY_IMMUT} evenIncrement: ${evenIncrement(myMut, MY_IMMUT)}`);
