/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/



fn abbreviate(word: &str) -> String {
    word.chars() // .split("") in JS  makes it iterable chars-> ["w", "o", ...]
    .filter(|&c| !"aeiouAEIOU" // |&c| is the same as ((c)=>{}) in JS
    .contains(c)) // includes in JS
    .collect() // join method in JS

}

fn main() {
    println!("{}", abbreviate("wonderful")); // "wndrfl"
    println!("{}", abbreviate("mystery")); // "mystry"
    println!("{}", abbreviate("Accordian")); // "ccrdn"

}


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = abbreviate;
