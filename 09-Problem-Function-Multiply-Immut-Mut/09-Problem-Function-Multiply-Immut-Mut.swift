// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.

var myMut: Int = 7;
let myImmut: Int = 9;

func multiply(num1: Int, num2: Int) -> Int {
    return num1 * num2
}

print("myMut: \(myMut) myImmut: \(myImmut) multiply: \(multiply(num1: myMut, num2: myImmut))")
