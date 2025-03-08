/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

fn main() {


    fn reverb(s: &str) -> Option<String> {

        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let mut result = String::new();

        for ch in s.chars().rev() {
            if vowels.contains(ch) {
                
            }
        }


    }

    println!("{:?}", reverb("running")); // runninging
    println!("{:?}", reverb("FAMILY"));  // FAMILYILY
    println!("{:?}", reverb("trash"));   // trashash
    println!("{:?}", reverb("DISH"));    // DISHISH
    println!("{:?}", reverb(197393));    // null


}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
