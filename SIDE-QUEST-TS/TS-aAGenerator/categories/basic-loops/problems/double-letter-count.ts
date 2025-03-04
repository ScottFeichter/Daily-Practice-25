/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

const doubleLetterCount = (str: string): number => {
  let total: number = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      total++;
    }
  }
  return total;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
console.log(doubleLetterCount(""));
console.log(doubleLetterCount("jeeepers creeepers where'd you get those peeepers?"));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
