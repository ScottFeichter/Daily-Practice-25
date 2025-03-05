/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

fn main() {

fn get_first_vowel(str: &str) -> Option<char> {
    let vowels = vec!['a', 'e', 'i', 'o', 'u'];

    str.chars().find(|&c| vowels.contains(&c))

}

println!("{:?}", get_first_vowel("battery"));      // "a"
println!("{:?}", get_first_vowel("tunnel"));       // "u"
println!("{:?}", get_first_vowel("dog"));          // "o"
println!("{:?}", get_first_vowel("conventional")); // "o"
println!("{:?}", get_first_vowel("rhythm"));       // null
println!("{:?}", get_first_vowel("try"));          // null

}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = getFirstVowel;
