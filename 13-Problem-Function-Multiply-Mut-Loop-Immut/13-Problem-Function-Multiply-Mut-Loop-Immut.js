// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.

let num1 = 4;
const num2 = 7;

const isEvenIncrement = () => {
  if(num1 % 2 === 0) {
    for(let i = num2; i > 0; i--){
      num1++
    }
    return num1;
  }
  return num1;
}

console.log(`num1: ${num1} num2: ${num2} isEvenIncrement: ${isEvenIncrement()}`);
