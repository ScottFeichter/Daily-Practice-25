// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.

#include <iostream>
using namespace std;

int multiply(int num1, int num2) {
    return num1 * num2;
}

int main() {

    int myMut = 7;
    const int MY_IMMUT = 9;

    cout << "myMut: " << myMut << " MY_IMMUT: " << MY_IMMUT << " multiply: " << multiply(myMut, MY_IMMUT) << endl;

    return 0;
}
