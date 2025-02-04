use std::fs::File;

fn main() {
    println!("Ready to try to open a file???");
    let greeting_file_result = File::open("hello.txt");
    println!("{:?}", greeting_file_result);
    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {error:?}"),
    };
}

