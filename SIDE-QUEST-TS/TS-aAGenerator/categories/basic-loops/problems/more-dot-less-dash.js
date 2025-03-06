"use strict";
/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/
Object.defineProperty(exports, "__esModule", { value: true });
var moreDotLessDash = function (stir) {
    var counter = { dots: 0, dashes: 0 };
    for (var _i = 0, stir_1 = stir; _i < stir_1.length; _i++) {
        var char = stir_1[_i];
        if (char === ".") {
            counter.dots++;
        }
        else if (char === "-") {
            counter.dashes++;
        }
    }
    return (counter.dots > counter.dashes);
};
console.log(moreDotLessDash('2-D arrays are fun. I think.')); // true
console.log(moreDotLessDash('Morse code is great.')); // true
console.log(moreDotLessDash('.... . -.--')); // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.')); // false
console.log(moreDotLessDash('high-flying acrobat.')); // false
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
