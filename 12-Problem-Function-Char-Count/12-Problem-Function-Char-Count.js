// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.


let count = 0;
let moreThanTen = false;

const charCount = (str) => {
  for(let i = 0; i < str.length; i++) {
    count++
  }
  let localCount = count;
  count = 0;

  return localCount;
}

const isMoreThanTen = (thisCount) => {
  moreThanTen = (thisCount > 10);

  let localMoreThanTen = moreThanTen;

  moreThanTen = false;

  return localMoreThanTen;
}

const str1 = "Tomorrow";
const str2 = "Pandemonium";
const str3 = "The";


console.log(`str1: letter count = ${charCount(str1)} more than 10 = ${isMoreThanTen(charCount(str1))}`);
console.log(`str2: letter count = ${charCount(str2)} more than 10 = ${isMoreThanTen(charCount(str2))}`);
console.log(`str3: letter count = ${charCount(str3)} more than 10 = ${isMoreThanTen(charCount(str3))}`);
