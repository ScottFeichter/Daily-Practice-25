// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.

#include <iostream>
using namespace std;

int num1 = 4;
const int num2 = 7;

int isEvenIncrement() {
    if (num1 % 4 == 0) {
        int i = num2;
        while (i > 0) {
            num1++;
            i--;
        }
        return num1;
    }
    return num1;
}

int main() {


    cout << "num1: " << num1 << " num2: " << num2 << " isEvenIncrement: " << isEvenIncrement() << endl;



    return 0;
}
