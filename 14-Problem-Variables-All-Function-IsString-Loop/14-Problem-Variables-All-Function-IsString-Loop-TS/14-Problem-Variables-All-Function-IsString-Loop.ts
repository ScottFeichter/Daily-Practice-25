// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

const numb: number = 3;
const stri1: String = 'stri1';
const stri2: String = 'stri2';
const stri3: String = 'stri3';
const boolsy: Boolean = false;
const charsy: String = 'c';
const floatsy = 32.32;

let counts: number = 0;

const isStringy = (prim) => {
  return (typeof prim === 'string');

}

const incrementsCount = (prim) => {
  if(isStringy(prim)) {
    counts++;
  }
}

const printTypey = (prim) => {
  console.log(typeof prim);
}

console.log(numb, stri1, stri2, stri3, boolsy, charsy, floatsy, counts);

printTypey(numb);
printTypey(stri1);
printTypey(stri2);
printTypey(stri3);
printTypey(boolsy);
printTypey(charsy);
printTypey(floatsy);


incrementsCount(numb);
incrementsCount(stri1);
incrementsCount(stri2);
incrementsCount(stri3);
incrementsCount(boolsy);
incrementsCount(charsy);
incrementsCount(floatsy);

console.log(`final count: ${counts}`);