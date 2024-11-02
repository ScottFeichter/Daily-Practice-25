// create a mutable variable sum = 1 and print it then create a basic for loop and increment sum 9 times to total 10 then print sum

fn main() {
    let mut sum = 1u32;
    println!("{}", sum);

    while sum < 10 {
        sum += 1;
    }

    println!("{}", sum);

}
