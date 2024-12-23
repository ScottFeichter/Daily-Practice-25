// Do everything in problem 15 but make the int generated from randome between 1 - 10

extern crate rand;
use rand::Rng;

fn main() {

    let nint: u32 = rand::thread_rng().gen_range(1..=10);
    let flote: f32 = 32.32;
    let chr: char = 'c';
    let stir: &str = "str";
    let boo: bool = true;

    fn increment_nint(num: u32) -> u32 {
        let mut local_nu_nint: u32 = num;
        if num > 5 {
            let mut adder: u32 = rand::thread_rng().gen_range(1..=10);
            let mut loops: u32 = rand::thread_rng().gen_range(1..=10);

            println!("adder: {adder}");
            println!("loops: {loops}");

            while loops > 0 {
                local_nu_nint+= adder;
                adder+= 1;
                loops-= 1;
            }
        }
      println!("increment_nint(nint): ");
      return local_nu_nint;
    }

    println!("nint: {nint} flote: {flote} chr: {chr} stir: {stir} boo: {boo}");

    println!("{}", increment_nint(nint));

}
