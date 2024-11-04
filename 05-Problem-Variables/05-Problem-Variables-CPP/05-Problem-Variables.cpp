// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

#include <iostream>
using namespace std;

int main() {

    int myMutable = 5;
    const int immutable = 6;

    cout << "mutable: " << myMutable << " immutable: " << immutable << endl;

    myMutable += immutable;

    cout << "mutable: " << myMutable << " immutable: " << immutable << endl;

  return 0;
}
