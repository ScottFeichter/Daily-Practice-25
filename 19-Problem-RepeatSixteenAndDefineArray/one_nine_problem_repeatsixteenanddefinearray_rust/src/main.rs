// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans

// the arrays are causing errors because they are not able to be printed in this format

extern crate rand;
use rand::Rng;

fn main() {


    let nint: u32 = rand::thread_rng().gen_range(1..=10);
    let flote: f32 = 32.32;
    let chr: char = 'c';
    let stir: &str = "String";
    let boo: bool = true;


    let mut nums: [u32; 4] = [1, 2, 3, 4];
    let mut flotes: [f32; 4] = [11.11, 22.22, 33.33, 44.44];
    let mut chars: [char; 4] = ['a', 'b', 'c', 'd'];
    let mut stirs: [&str; 5] = ["Hello", "World", "I", "am", "Scott"];
    let mut boos: [bool; 4] = [true, false, false, true];

    fn increment_nint(num: u32) -> u32 {
        let mut local_num: u32 = num;
        if local_num > 5 {
            let mut adder: u32 = rand::thread_rng().gen_range(1..=10);
            let mut loops: u32 = rand::thread_rng().gen_range(1..=10);

            while loops > 5 {
                local_num+= adder;
                adder+= 1;
                loops-= 1;
            }
        }
      return local_num;
    }


    println!("nint: {nint} flote: {flote} chr: {chr} stir: {stir} boo: {boo}");
    println!("nums: {nums} flotes: {flotes} chars: {chars} stirs: {stirs} boos: {boos}");
    println!("increment_nint(nint): ");
    println!("{}", increment_nint(nint));

}
