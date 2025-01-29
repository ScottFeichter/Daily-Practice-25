fn main() {

    There’s one other aspect of match we need to discuss: the arms’ patterns must cover all possibilities.

    fn plus_one(x: Option<i32>) -> Option<i32> { // this won't compile
        match x {
            Some(i) => Some(i + 1),
        }
    }

    // We didn’t handle the None case, so this code will cause a bug. Luckily, it’s a bug Rust knows how to catch.

    // Rust knows that we didn’t cover every possible case, and even knows which pattern we forgot! Matches in Rust are exhaustive: we must exhaust every last possibility in order for the code to be valid. Especially in the case of Option<T>, when Rust prevents us from forgetting to explicitly handle the None case, it protects us from assuming that we have a value when we might have null, thus making the billion-dollar mistake discussed earlier impossible.

    





}
