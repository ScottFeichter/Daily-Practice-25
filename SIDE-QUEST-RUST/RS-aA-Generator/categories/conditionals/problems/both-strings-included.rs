/*
Define a function named bothStringsIncluded that accepts a sentence string,
and two strings as parameters (for a total of 3 parameters). The function
should return true if both strings are found in the sentence, otherwise
it should return false.
*/



fn main() {

    fn both_strings_included(sentence: &str, str1: &str, str2: &str) -> bool {
        sentence.contains(str1) && sentence.contains(str2)

    }


    println!("{}", both_strings_included("how now brown cow?", "panther", "cow"));  //=> false
    println!("{}", both_strings_included("Dance party!", "Dance", "party"));        //=> true
    println!("{}", both_strings_included("Question?", "tion", "?"));                //=> true
    println!("{}", both_strings_included("I love programming", "apple", "potato")); //=> false



}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
