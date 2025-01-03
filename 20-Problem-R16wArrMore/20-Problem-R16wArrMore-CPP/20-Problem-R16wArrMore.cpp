// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible

#include <iostream>
#include <random>
#include <any>
#include <array>
#include <string>
using namespace std;


int incrementNint(int num) {
    int local_nint = num;
    if(local_nint > 5){

        random_device rd; // seed
        mt19937 gen(rd()); // Mersenne Twister
        uniform_int_distribution<> dis(1, 10); // range
        int adder = dis(gen);
        int loops = dis(gen);
        while(loops > 0){
            local_nint+=adder;
            adder++;
            loops--;
        }
    }
    return local_nint;
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

    int undv;

    int nums[4] = {0, 1, 2,3};
    float flotes[4] = {11.11, 22.22, 33.33, 44.44};
    char chars[4] = {'a', 'b', 'c', 'd'};
    string stirs[4] = {"This", "is", "stir", "array"};
    bool boos[4] = {true, false, false, true};



    // array<any, 4> mixta; NOT SURE WHY THIS DOESN'T WORK OR HOW TO MAKE IT WORK
    // mixta[0] = 0;
    // mixta[1] = 'b';
    // mixta[2] = "three";
    // mixta[3] = false;


    int unda[0];

    cout << "NINT: " << NINT << " FLOTE: " << FLOTE << " CHR: " << CHR << " STR: " << STR << " BOO: " << BOO << " undv: " << undv << endl;

    cout << "nums: " << nums << " flotes: " << flotes << " chars: " << chars << " stirs: " << stirs << " boos: " << boos << " unda " << unda << endl;

    cout << "incrementNint(NINT): " << incrementNint(NINT) << endl;





    return 0;
}
