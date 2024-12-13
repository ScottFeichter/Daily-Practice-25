// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.


fn main() {

    let nint: u32 = 7;
    let flote: f32 = 32.32;
    let chr: char = 'c';
    let stir: &str = "hello";
    let boo: bool = false;

    fn increment_count(mut num: u32) -> u32 {
        if num > 5 {
            let mut adder = 3;
            let mut loops = num;
            while loops > 0 {
                num+= adder;
                adder+= 1;
                loops-= 1;
            }
        }
        return num;
    }



    println!("nint: {nint} flote: {flote} chr: {chr} stir: {stir} boo: {boo}");
    println!("{}", increment_count(nint));
}
