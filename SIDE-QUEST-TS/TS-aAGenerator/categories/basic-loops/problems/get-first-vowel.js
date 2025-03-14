/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/
var getFirstVowel = function (str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char))
            return char;
    }
    return null;
};
console.log(getFirstVowel('battery')); // 'a'
console.log(getFirstVowel('tunnel')); // 'u'
console.log(getFirstVowel('dog')); // 'o'
console.log(getFirstVowel('conventional')); // 'o'
console.log(getFirstVowel('rhythm')); // null
console.log(getFirstVowel('try')); // null
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = getFirstVowel;
