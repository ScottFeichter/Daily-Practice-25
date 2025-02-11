use std::env;
use std::fs;

// fn main() {
//     let args: Vec<String> = env::args().collect();
//     // dbg!(args);

//     let binary = &args[0];
//     let query = &args[1];
//     let file_path = &args[2];

//     let contents = fs::read_to_string(file_path)
//         .expect("Should have been able to read the file");

//     println!("The binary target is {binary}");
//     println!("Searching for {query}");
//     println!("In file {file_path}");
//     println!("With text:\n{contents}");
// }


fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::new(&args);

    println!("The binary target is {}", config.binary);
    println!("Searching for {}", config.query);
    println!("In file {}", config.file_path);

    let contents = fs::read_to_string(config.file_path)
        .expect("Should have been able to read the file");


    println!("With text:\n{contents}");


}

struct Config {
    binary: String,
    query: String,
    file_path: String,
}

impl Config {
    fn new(args: &[String]) -> Config {
        if args.len() < 3 {
            panic!("not enough arguments");
        }
        let binary = args[0].clone();
        let query = args[1].clone();
        let file_path = args[2].clone();

        Config { binary, query, file_path }
    }
}
