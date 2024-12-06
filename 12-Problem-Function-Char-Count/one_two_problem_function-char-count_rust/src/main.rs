// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.


// having some problems here. may need to side quest. check out: https://blog.jetbrains.com/rust/2024/09/20/how-to-learn-rust/

fn main() {


    let mut count: u32 = 0;
    let mut more_than_ten: bool = false;

    fn char_count(word: &str) -> u32 {
        for char in word.chars() {
            count+= 1;
        }

        let local_count = count;
        count = 0;

        return local_count;
    }

    fn is_more_than_ten(this_count: u32) -> bool {
        if this_count > 0 {
            return true
        }
        return false;
    }

    let str1: &str = "Tommorrow";
    let str2: &str = "Pandemonium";
    let str3: &str = "The";

    println!("{}", "{}", "str1: length = {char_count(str1)} is more than ten = {is_more_than_ten(char_count(str1))}");
    println!("{} {}", "str2: length = {char_count(str2)} is more than ten = {is_more_than_ten(char_count(str2))}");
    println!("{} {}", "str3: length = {char_count(str3)} is more than ten = {is_more_than_ten(char_count(str3))}");
}
