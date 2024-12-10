// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.

// scoping problem...need side quest


fn main() {

    static mut num1: u32 = 4;
    static num2: u32 = 7;

    fn is_even_increment() -> u32 {

        if num1 % 2 == 0 {
            let mut i: u32 = num2;
            while i > 0 {
                num1+=1;
                i-=1;
            }
            return num1;
        }
        return num1;
    }

    println!("{}", is_even_increment());
}
