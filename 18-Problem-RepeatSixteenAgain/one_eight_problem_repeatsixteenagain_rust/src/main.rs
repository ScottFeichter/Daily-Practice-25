// Repeat problem 16 again to work rote memory of basic syntax.

extern crate rand;
use rand::Rng;

fn main() {

    let nint: u32 = rand::thread_rng().gen_range(1..=10);
    let flote: f32 = 32.32;
    let chr: char = 'c';
    let stir: &str = "String";
    let boo: bool = true;

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
    println!("increment_nint(nint): ");
    println!("{}", increment_nint(nint));


}
