// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

#include <iostream>
using namespace std;

int main() {

    int myMutable = 4;
    const int MY_IMMUTABLE = 5;

    cout << "myMutable: " << myMutable << " MY_IMMUTABLE: " << MY_IMMUTABLE << endl;

    myMutable += MY_IMMUTABLE;

    cout << "myMutable: " << myMutable << " MY_IMMUTABLE: " << MY_IMMUTABLE << endl;

    return 0;
}
