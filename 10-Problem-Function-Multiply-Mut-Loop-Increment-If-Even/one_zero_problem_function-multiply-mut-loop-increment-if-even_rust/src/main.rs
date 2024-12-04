// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable



fn main() {

    let mut my_mutable: u32 = 4;
    let my_immutable: u32 = 5;

    fn is_even(num: u32) -> bool {

        if num % 2 == 0 {
            return true;
        }
        return false;
    }

    fn even_increment(mut num1: u32, mut num2: u32) -> u32 {


        if is_even(num1){
            while num2 > 0 {
                num1 += 1;
                num2 -= 1;
            }
            return num1;
        }
        return num1;
    }




    println!("my_mutable: {my_mutable} my_immutable: {my_immutable} evenIncrement: {res}", res = even_increment(my_mutable, my_immutable));
}
