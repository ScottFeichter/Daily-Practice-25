// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

const num = 3;
const str1 = "str1";
const str2 = "str2";
const str3 = "str3";
const bools = false;
const char = "c";
const floats = 32.32;

let count = 0;

const isString = (primitive) => {
  return (typeof primitive === "string");
}

const incrementCount = (variable) => {
  if (isString(variable)) count++;
}

const printType = (primitive) => {
  console.log(typeof primitive);
}


console.log(num, str1, str2, str3, bools, char, floats, count);

printType(num);
printType(str1);
printType(str2);
printType(str3);
printType(bools);
printType(char);
printType(floats);


incrementCount(num);
incrementCount(str1);
incrementCount(str2);
incrementCount(str3);
incrementCount(bools);
incrementCount(char);
incrementCount(floats);

console.log(`final count: ${count}`);
