// Repeat problem 16 again to work rote memory of basic syntax.

#include <iostream>
#include <random>
using namespace std;


int incrementNint(int num) {
    if(num > 5){

        random_device rd; // seed
        mt19937 gen(rd()); // Mersenne Twister
        uniform_int_distribution<> dis(1, 10); // range

        int adder = dis(gen);
        int loops = dis(gen);

        while (loops > 0) {
            num+= adder;
            adder++;
            loops--;
        }
    }
    return num;
}


int main() {

    random_device rd; // seed
    mt19937 gen(rd()); // Mersenne Twister
    uniform_int_distribution<> dis(1, 10); // range

    const int NINT = dis(gen);
    const float FLOTE = 32.32;
    const char CHR = 'c';
    const string STR = "String";
    const bool BOO = true;

    cout << "NINT: " << NINT << " FLOTE: " << FLOTE << " CHR: " << CHR << " STR: " << STR << " BOO: " << BOO << endl;

    cout << "incrementNint(NINT): " << incrementNint(NINT) << endl;

    return 0;
}
