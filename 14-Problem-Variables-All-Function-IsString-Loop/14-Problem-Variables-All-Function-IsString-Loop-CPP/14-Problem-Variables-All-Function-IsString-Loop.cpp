// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

// problem - how to create fn with arg of unknown type
// solution - function template https://cplusplus.com/doc/oldtutorial/templates/

// problem - getting the type of a string
// need side quest c++ to better understand char and str manipulation

#include <iostream>
#include <string>
#include <typeinfo>

using namespace std;

    // template <typename T>
    // bool isString(T prim) {

    //     cout << typeid(prim).name() << endl;

    //     // if(typeid(prim).name() == "string") {
    //     //     return true;
    //     // }

    //     return false;
    // }

    // template <typename T>
    // void incrementCount(T prim) {
    //     // if(isString(prim)) {
    //     //     count++;
    //     // }
    // }

    // template <typename T>
    // void printType(T prim) {

    //     const type_info = typeid(prim);

    //     cout << type_info << endl;

    //     const char* type_name = type_info.name();

    //     cout << type_name << endl;
    // }


int main(){

    const int num = 3;
    const string str1 = "str1";
    const string str2 = "str2";
    const string str3 = "str3";
    const bool bools = false;
    const char chrs = 'c';
    const float floats = 32.32;

    int count = 0;

    // printType(num);
    // printType(str1);
    // printType(str2);
    // printType(str3);
    // printType(bools);
    // printType(chrs);
    // printType(floats);

    std::string my_string = "Hello, world!";

      // Get the type_info object for the string
  const std::type_info& type_info = typeid(my_string);

  // Get the name of the type
  const char* type_name = type_info.name();

  // Print the type name
  std::cout << "Type of my_string is: " << type_name << std::endl;

      std::string my_string2 = "Hello, jupiter!";

      // Get the type_info object for the string
  const std::type_info& type_info2 = typeid(my_string2);

  // Get the name of the type
  const string type_name2 = type_info2.name();

  // Print the type name
  std::cout << "Type of my_string2 is: " << type_name2 << std::endl;





    return 0;
}
