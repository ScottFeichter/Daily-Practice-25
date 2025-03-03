/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/

fn main() {

    fn is_valid_substring(str1: &str, str2: &str) -> String {
        if str1.to_lowercase().contains(&str2.to_lowercase()) { return String::from("VALID") }
        else { return String::from("INVALID") }
    }

    println!("{}", is_valid_substring("JOY", "joy"));                     // => 'VALID'
    println!("{}", is_valid_substring("The cat jumped!", "he cat jump")); // => 'VALID'
    println!("{}", is_valid_substring("Time to program", "time"));        // => 'VALID'
    println!("{}", is_valid_substring("happy", "happiness"));             // => 'INVALID'




}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
