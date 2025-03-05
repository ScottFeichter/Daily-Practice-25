/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/
fn main() {


    fn get_last_vowel(str: &str) -> Option<char> {
        let vowels = vec!['a', 'e', 'i', 'o', 'u'];

        str.chars().rfind(|&c| vowels.contains(&c))
    }


    println!("{:?}", get_last_vowel("battery"));      // "e"
    println!("{:?}", get_last_vowel("tunnel"));       // "e"
    println!("{:?}", get_last_vowel("dog"));          // "o"
    println!("{:?}", get_last_vowel("conventional")); // "a"
    println!("{:?}", get_last_vowel("rhythm"));       // null
    println!("{:?}", get_last_vowel("try"));          // null

}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = getLastVowel;
