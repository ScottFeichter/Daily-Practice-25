// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.

let myMut = 7;
const myImmut = 9;

const multiply = (num1, num2) => {
  return num1 * num2;
}

console.log(`myMut: ${myMut} myImmut: ${myImmut} product: ${multiply(myMut, myImmut)}`);


