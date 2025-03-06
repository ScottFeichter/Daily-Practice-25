/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/
var sillyString = function (word) {
    var vowels = "aeiouAEIOU";
    var nuWord = "";
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (vowels.includes(char)) {
            nuWord += char + "b" + char;
        }
        else {
            nuWord += char;
        }
    }
    return nuWord;
};
console.log(sillyString('stop')); // stobop
console.log(sillyString('that')); // thabat
console.log(sillyString('can')); // caban
console.log(sillyString('cats')); // cabats
console.log(sillyString('italy')); // ibitabaly
console.log(sillyString('scooter')); // scobooboteber
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
