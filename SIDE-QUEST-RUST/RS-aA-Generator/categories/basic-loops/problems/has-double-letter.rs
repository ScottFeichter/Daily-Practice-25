/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
*/

enum InputType {
    Str(String),
    Invalid,
}

fn has_double_letter(input: InputType) -> Option<bool> {
    match input {
        InputType::Str(word) => {
            let mut chars = word.chars();
            let mut prev = chars.next();

            for c in chars {
                if Some(c) == prev {
                    return Some(true);
                }
                prev = Some(c);
            }
            Some(false)
        }
        InputType::Invalid => None, // Equivalent to returning `null` in JS
    }
}

fn main() {
    println!("{:?}", has_double_letter(InputType::Str("deer".to_string()))); // Some(true)
    println!("{:?}", has_double_letter(InputType::Str("boot camp".to_string()))); // Some(true)
    println!("{:?}", has_double_letter(InputType::Str("toggle".to_string()))); // Some(true)
    println!("{:?}", has_double_letter(InputType::Str("taco".to_string()))); // Some(false)
    println!("{:?}", has_double_letter(InputType::Str("jumper".to_string()))); // Some(false)

    // Simulating non-string inputs
    println!("{:?}", has_double_letter(InputType::Invalid)); // None
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = hasDoubleLetter;
