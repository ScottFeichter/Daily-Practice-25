/*
Write a function double_letter_count that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// fn double_letter_count(word: &str) -> i32 {
//     let mut count: i32 = 0;

//     let chars: Vec<char> = word.chars().collect();

//     for i in 0..chars.len() - 1 {
//         if chars[i] == chars[i + 1] {
//             count += 1;
//         }
//     }
//     return count;
// }

fn double_letter_count(word: &str) -> i32 {
    word.chars()
        .collect::<Vec<char>>()
        .windows(2)
        .filter(|pair| pair[0] == pair[1])
        .count() as i32
}

fn main() {
    println!("{}", double_letter_count("the jeep rolled down the hill"));  // 3
    println!("{}", double_letter_count("bootcamp")); // 1
    println!("{}", double_letter_count("hello")); // 1 (ll)
    println!("{}", double_letter_count("book")); // 1 (oo)
    println!("{}", double_letter_count("better")); // 1 (tt)
    println!("{}", double_letter_count("forest")); // 0
}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = double_letter_count;
