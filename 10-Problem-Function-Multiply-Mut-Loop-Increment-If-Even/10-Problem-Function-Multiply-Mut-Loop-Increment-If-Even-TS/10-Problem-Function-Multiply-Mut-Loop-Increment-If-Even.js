// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable
var myMut = 4;
var MY_IMMUT = 5;
var isEven = function (num) {
    return (num % 2 === 0);
};
var evenIncrement = function (num1, num2) {
    if (isEven(num1)) {
        while (num2 > 0) {
            num1++;
            num2--;
        }
        return num1;
    }
    return num1;
};
console.log("myMut: ".concat(myMut, " MY_IMMUT: ").concat(MY_IMMUT, " evenIncrement: ").concat(evenIncrement(myMut, MY_IMMUT)));
