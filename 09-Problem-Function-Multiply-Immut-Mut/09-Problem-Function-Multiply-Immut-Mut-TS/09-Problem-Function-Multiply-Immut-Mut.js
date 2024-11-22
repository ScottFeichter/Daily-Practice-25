// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.
var myMut = 7;
var MY_IMMUT = 9;
function multiply(num1, num2) {
    return num1 * num2;
}
console.log("myMut: ".concat(myMut, " MY_IMMUT: ").concat(MY_IMMUT, " multiply: ").concat(multiply(myMut, MY_IMMUT)));
