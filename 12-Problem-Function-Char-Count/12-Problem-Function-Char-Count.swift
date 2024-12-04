// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.

var count: Int = 0;
var moreThanTen: Bool = false;

func charCount(str: String) -> Int {

    for char in str {
        count+=1;
    }

    let localCount: Int = count;
    count = 0;
    return localCount;
}

func isMoreThanTen(thisCount: Int) -> Bool {
    return (thisCount > 10);
}

let str1: String = "Tomorrow";
let str2: String = "Pandemonium";
let str3: String = "The";

print("str1: letter count = \(charCount(str: str1)) more than 10 = \(isMoreThanTen(thisCount: charCount(str: str1)))");

print("str2: letter count = \(charCount(str: str2)) more than 10 = \(isMoreThanTen(thisCount: charCount(str: str2)))");

print("str3: letter count = \(charCount(str: str3)) more than 10 = \(isMoreThanTen(thisCount: charCount(str: str3)))");
