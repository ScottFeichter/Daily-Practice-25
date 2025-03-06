/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/
var reverb = function (word) {
    if (typeof word !== "string")
        return null;
    var vowels = "aeiouAEIOU";
    for (var i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
    }
    return "word has no vowels";
};
console.log(reverb('running')); // runninging
console.log(reverb('FAMILY')); // FAMILYILY
console.log(reverb('trash')); // trashash
console.log(reverb('DISH')); // DISHISH
console.log(reverb(197393)); // null
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
