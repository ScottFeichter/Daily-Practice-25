fn main() {

    fn greater_than_five(num: i32) -> bool {
        if num < 5 {
            println!("condition was true");
            return true;
        } else {
            println!("condition was false");
            return false;
        }
    }

    fn divisible_four_three_or_two(num: i32) -> bool {

        if num % 4 == 0 {
            println!("number is divisible by 4");
            return true;
        } else if num % 3 == 0 {
            println!("number divisible by 3");
            return true;
        } else if num % 2 == 0 {
            println!("number is divisible by 2");
            return true;
        } else {
            println!("number is not divisible by 4, 3, or 2");
            return false;
        };

    }



    let condition: bool = true;
    let number: i32  = if condition { 5 } else { 6 };


    fn loops_return_value() -> i32 {
        let mut counter: i32 = 0;

        let result: i32 = loop {
            counter += 1;

            if counter == 10 {
                break counter * 2;
            }
        };

        println!("The result is {result}");
        return counter;
    }


    fn loop_labels() -> i32 {

        let mut count: i32 = 0;

        'counting_up: loop {
            println!("count = {count}");
            let mut remaining: i32 = 10;

            loop {
                println!("remaining = {remaining}");
                if remaining == 9 {
                    break;
                }
                if count == 2 {
                    break 'counting_up;
                }
                remaining -= 1;
            }

            count += 1;
        }
        println!("End count = {count}");


        return count;
    }



    println!("The value of number is: {number}");
    println!("7 is greater than 5: {}", greater_than_five(7));
    println!("6 is divisible by 4, 3, or 2: {}", divisible_four_three_or_two(6));
    println!("{}", loops_return_value());
    println!("{}", loop_labels());



}
