// Do everything in problem 15 but make the int generated from randome between 1 - 10

use rand::Rng;

fn main() {

   let nint: u32 = rand::thread_rng().gen_range(1..10);




    println!("{}", nint);
}
