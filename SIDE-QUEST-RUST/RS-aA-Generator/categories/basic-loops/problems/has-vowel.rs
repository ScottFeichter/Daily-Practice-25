/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

fn main() {



    fn has_vowel(stir: &str) -> bool {

        stir.chars().any(|c| "aeiouAEIOU".contains(c))

    }

println!("{:?}", has_vowel("dog"));          // => true
println!("{:?}", has_vowel("conventional")); // => true
println!("{:?}", has_vowel("rhythm"));       // => false




}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = hasVowel;
