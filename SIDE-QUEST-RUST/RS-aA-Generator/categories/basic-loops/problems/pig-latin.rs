/*
Pig Latin is a fun take on the English language where you move any consonant
cluster from the start of the word to the end of the word; when words begin on a
vowel, you simply add "-yay".

Vowels are the letters "a", "e", "i", "o", "u".

Write a function pigLatinWord that takes in a word string and translates the
word into Pig Latin. For this problem use the String's slice() method. The
slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:
1. For words that start with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come **before
   the first vowel** to the **end of the word** then add 'ay'
*/
fn main() {

    fn pig_latin_word(s: &str) -> String {

        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let mut result = String::new();

        for word in s.split_whitespace() {
            let mut chars = word.chars();
            let first_char = chars.next().unwrap_or_default();

            if vowels.contains(&first_char.to_ascii_lowercase()) {
                // Word starts with a vowel
                result.push_str(&format!("{}-yay ", word));
            } else {
                // Word starts with a consonant
                let rest_of_word: String = chars.collect();
                result.push_str(&format!("{}-{}ay ", rest_of_word, first_char));
            }
        }

        result


    }
    
    println!("{}", pig_latin_word("apple")); //=> "appleyay"
    println!("{}", pig_latin_word("eat")); //=> "eatyay"
    println!("{}", pig_latin_word("banana")); //=> "ananabay"
    println!("{}", pig_latin_word("trash")); //=> "ashtray"



}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = pigLatinWord;
