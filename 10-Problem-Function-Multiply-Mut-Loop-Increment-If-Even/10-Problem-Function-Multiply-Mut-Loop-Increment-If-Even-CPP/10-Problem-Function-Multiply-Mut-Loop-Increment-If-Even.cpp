// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

#include <iostream>
using namespace std;

    bool isEven(int num){
        if(num % 2 == 0){
            return true;
        }
        return false;
    }

    int evenIncrement(int num1, int num2){
        if(isEven(num1)){
            while(num2 > 0){
                num1++;
                num2--;
            }
            return num1;
        }
        return num1;
    }

int main(){

    int myMut = 4;
    const int MY_IMMUT = 5;



    cout << "myMut: " << myMut << " MY_IMMUT: " << MY_IMMUT << " evenIncrement: " << evenIncrement(myMut, MY_IMMUT) << endl;



    return 0;
}
