// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.

#include <iostream>
using namespace std;

  int global_count = 0;
  bool global_moreThanTen = false;

  int charCount(string str) {

    for (char c : str) {
        global_count++;
    }

    int local_count = global_count;
    global_count = 0;

    return local_count;
  }


  bool isMoreThanTen(int thisCount){
    return (thisCount > 10);
    // this works but it will resolve to 0 or 1 for true or false because that is what C++ uses for bool

  }


int main() {

  string str1 = "Tomorrow";
  string str2 = "Pandemonium";
  string str3 = "The";

  cout << "str1: letter count =  " << charCount(str1) << " more than 10 = " << isMoreThanTen(charCount(str1)) << endl;
  cout << "str2: letter count =  " << charCount(str2) << " more than 10 = " << isMoreThanTen(charCount(str2)) << endl;
  cout << "str3: letter count =  " << charCount(str3) << " more than 10 = " << isMoreThanTen(charCount(str3)) << endl;

  cout << global_moreThanTen << endl;

  return 0;
}
