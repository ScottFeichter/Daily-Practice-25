// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.
var count = 0;
var moreThanTen = false;
var charCount = function (str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        count++;
    }
    var localCount = count;
    count = 0;
    return localCount;
};
var isMoreThanTen = function (thisCount) {
    moreThanTen = (thisCount > 10);
    var localMoreThanTen = moreThanTen;
    moreThanTen = false;
    return localMoreThanTen;
};
var str1 = "Tomorrow";
var str2 = "Pnademonium";
var str3 = "The";
console.log("str1: letter count = ".concat(charCount(str1), " more than 10 = ").concat(isMoreThanTen(charCount(str1))));
console.log("str2: letter count = ".concat(charCount(str2), " more than 10 = ").concat(isMoreThanTen(charCount(str2))));
console.log("str3: letter count = ".concat(charCount(str3), " more than 10 = ").concat(isMoreThanTen(charCount(str3))));
