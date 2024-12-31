// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans

#include <iostream>
#include <random>
using namespace std;


// printing addresses of arrays...adjust this next time

int incrementNint(int num){
    int local_nint = num;
    if(num > 5){
        random_device rd; // seed
        mt19937 gen(rd()); // Mersenne Twister
        uniform_int_distribution<> dis(1, 10); // range

        int adder = dis(gen);
        int loops = dis(gen);

        while(loops > 0){
            local_nint+= adder;
            adder++;
            loops--;
        }
    }
    return local_nint;
}

int main(){

  random_device rd; // seed
  mt19937 gen(rd()); // Mersenne Twister
  uniform_int_distribution<> dis(1, 10); // range

  const int NINT = dis(gen);
  const float FLOTE = 32.32;
  const char CHR = 'c';
  const string STR = "String";
  const bool BOO = true;

  const int nums[4] = {0, 1, 2, 3};
  const float flotes[4] = {11.11, 22.22, 33.33, 44.44};
  const char chars[4] = {'a', 'b', 'c', 'd'};
  const string stirs[5] = {"Hello", "World", "I", "am", "Scott"};
  const bool boos[4] = {true, false, false, true};


    cout << "NINT: " << NINT << " FLOTE: " << FLOTE << " CHR: " << CHR << " STR: " << STR << " BOO: " << BOO << endl;

    cout << "nums: " << nums << " flotes: " << flotes << " chars: " << chars << " stirs: " << stirs << " boos: " << boos << endl;

    cout << "incrementNint(NINT): " << incrementNint(NINT) << endl;

  return 0;
}
