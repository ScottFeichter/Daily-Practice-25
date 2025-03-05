/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/
var logBetween = function (num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i);
    }
};
logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
