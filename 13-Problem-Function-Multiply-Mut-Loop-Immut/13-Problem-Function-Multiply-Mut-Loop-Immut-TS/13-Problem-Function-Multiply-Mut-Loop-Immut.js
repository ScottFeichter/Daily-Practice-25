// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.
var num1 = 4;
var num2 = 7;
var isEvenIncrement = function () {
    if (num1 % 2 === 0) {
        var i = num2;
        while (i > 0) {
            num1++;
            i--;
        }
        return num1;
    }
    return num1;
};
console.log("num1: ".concat(num1, " num2: ").concat(num2, " isEvenIncrement: ").concat(isEvenIncrement()));
