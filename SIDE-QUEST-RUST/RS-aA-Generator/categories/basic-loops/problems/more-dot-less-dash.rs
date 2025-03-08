/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

fn main() {

    fn more_dot_less_dash(s: &str) -> bool {
        let dot_count = s.chars().filter(|&c| c == '.').count();
        let dash_count = s.chars().filter(|&c| c == '-').count();

        dot_count > dash_count

    }

    println!("{:?}", more_dot_less_dash("2-D arrays are fun. I think."));           // true
    println!("{:?}", more_dot_less_dash("Morse code is great."));                   // true
    println!("{:?}", more_dot_less_dash(".... . -.--"));                            // true
    println!("{:?}", more_dot_less_dash(".--. .-. --- --. .-. .- -- -- . .-."));    // false
    println!("{:?}", more_dot_less_dash("high-flying acrobat."));                   // false

}



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
// module.exports = moreDotLessDash;
