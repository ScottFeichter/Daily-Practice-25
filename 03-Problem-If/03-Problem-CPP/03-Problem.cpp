// create a function with an if statement that returns true if an integer is even or false if it is odd
// print examples with the result for both outcomes to the log

#include <iostream>
using namespace std;

bool isEven(int num) {
    if(num % 2 == 0) {
        return true;
    }
    return false;
}

int main() {

    cout << 46 << endl;
    cout << isEven(46) << endl;
    cout << 93 << endl;
    cout << isEven(93) << endl;

    return 0;
}
