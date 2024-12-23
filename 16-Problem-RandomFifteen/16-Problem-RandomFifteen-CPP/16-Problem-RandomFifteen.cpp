// Do everything in problem 15 but make the int generated from randome between 1 - 10

#include <iostream>
#include <random>

using namespace std;




int incrementNint(int num){
    if(num > 5) {
        random_device rd; // seed
        mt19937 gen(rd()); // Mersenne Twister
        uniform_int_distribution<> dis(1, 10); // range
        int adder = dis(gen);
        int loops = dis(gen);

        std::cout << "adder: " << adder << std::endl;
        std::cout << "loops: " << loops << std::endl;

        while(loops > 0){
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

    const int nint = dis(gen);
    const float flote = 32.32;
    const char chr = 'c';
    const string str = "hello";
    const bool boo = true;

    cout << "nint: " << nint << " flote: " << flote << " chr: " << chr << " str: " << str << " boo: " << boo << endl;

    cout << "incrementNint(nint): " << incrementNint(nint) << endl;



    return 0;
}
