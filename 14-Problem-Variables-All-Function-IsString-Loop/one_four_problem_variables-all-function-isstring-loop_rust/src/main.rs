// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

// problem: again how to make a function that takes an arg of unknown type

fn main() {

    let num: u32 = 3;
    let str1: &str = "str1";
    let str2: &str = "str2";
    let str3: &str = "str3";
    let bools: bool = false;
    let chars: char = 'c';

    let mut count: u32 = 0;



    println!("{}", num.type_of());
}
