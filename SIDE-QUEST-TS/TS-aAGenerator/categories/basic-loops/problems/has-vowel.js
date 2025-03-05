/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/
var hasVowel = function (str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char))
            return true;
    }
    return false;
};
console.log(hasVowel('dog')); // => true
console.log(hasVowel('conventional')); // => true
console.log(hasVowel('rhythm')); // => false
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
