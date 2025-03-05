/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/
var leastCommonMultiple = function (num1, num2) {
    for (var i = 2; i < Infinity; i++) {
        if (i % num1 === 0 && i % num2 === 0)
            return i;
    }
};
console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
