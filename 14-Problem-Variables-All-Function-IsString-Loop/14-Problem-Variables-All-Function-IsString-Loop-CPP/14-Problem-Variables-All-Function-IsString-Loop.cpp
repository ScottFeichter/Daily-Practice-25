// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

// problem - how to create fn with arg of unknown type

#include <iostream>
#include <string>
using namespace std;

    bool isString(prim) {

        if(typeid(prim).name() == "string") {
            return true;
        }

        return false;
    }

    void incrementCount(prim) {
        if(isString(prim)) {
            count++;
        }
    }

    void printType(prim) {
        cout << typeid(prim).name() << endl;
    }


int main(){

    const int num = 3;
    const string str1 = "str1";
    const string str2 = "str2";
    const string str3 = "str3";
    const bool bools = false;
    const char chars[1] = "c";
    const float floats = 32.32;

    int count = 0;

    printType(num);
    printType(str1);
    printType(str2);
    printType(str3);
    printType(bools);
    printType(chars);
    printType(floats);





    return 0;
}
