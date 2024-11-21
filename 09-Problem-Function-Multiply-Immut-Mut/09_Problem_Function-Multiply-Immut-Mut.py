# create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.

myMut = 7
MY_IMMUT = 9

def multiply(num1, num2):
    return num1 * num2

print(f"myMut: {myMut} MY_IMMUT: {MY_IMMUT} product: {multiply(myMut, MY_IMMUT)}")


