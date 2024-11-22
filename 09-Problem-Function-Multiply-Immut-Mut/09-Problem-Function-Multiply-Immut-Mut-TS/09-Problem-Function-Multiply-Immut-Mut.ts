// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.


let myMut: number = 7;
const MY_IMMUT: number = 9;

function multiply(num1: number, num2: number) {
  return num1 * num2;
}


console.log(`myMut: ${myMut} MY_IMMUT: ${MY_IMMUT} multiply: ${multiply(myMut, MY_IMMUT)}`);
