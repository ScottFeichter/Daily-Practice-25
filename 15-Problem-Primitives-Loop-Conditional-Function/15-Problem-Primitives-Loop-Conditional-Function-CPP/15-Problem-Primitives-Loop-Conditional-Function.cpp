// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.

#include <iostream>
using namespace std;

    int incrementCount(int num) {
        if(num > 5) {
            int adder = 3;
            int loops = num;

            while(loops > 0) {
                num+= adder;
                adder++;
                loops--;
            }
        }
        return num;
    }

int main() {

    const int nint = 7;
    const float flote = 32.32;
    const char chr = 'c';
    const string str = "Hello";
    const bool boo = false;

    cout << "nint: " << nint << " flote: " << flote << " chr: " << chr << " str: " << str << " boo: " << boo << endl;

    cout << "incrementCount(nint): " << incrementCount(nint) << endl;




}
