fn main() {

    // Using enums, we can also take special actions for a few particular values, but for all other values take one default action.

    let dice_roll1 = 9;
    match dice_roll1 {
        3 => add_fancy_hat(),
        7 => remove_fancy_hat(),
        other => move_player(other),
    }

    fn add_fancy_hat() {}
    fn remove_fancy_hat() {}
    fn move_player(num_spaces: u8) {}


    // This catch-all pattern meets the requirement that match must be exhaustive. Note that we have to put the catch-all arm last because the patterns are evaluated in order.


    // Rust also has a pattern we can use when we want a catch-all but don’t want to use the value in the catch-all pattern: _ is a special pattern that matches any value and does not bind to that value. This tells Rust we aren’t going to use the value, so Rust won’t warn us about an unused variable.


    let dice_roll2 = 9;
    match dice_roll2 {
        3 => add_fancy_hat(),
        7 => remove_fancy_hat(),
        _ => reroll(),
    }

    fn add_fancy_hat() {}
    fn remove_fancy_hat() {}
    fn reroll() {}

    // This example also meets the exhaustiveness requirement because we’re explicitly ignoring all other values in the last arm; we haven’t forgotten anything.

    // Finally, we’ll change the rules of the game one more time so that nothing else happens on your turn if you roll anything other than a 3 or a 7. We can express that by using the unit value (the empty tuple type we mentioned in “The Tuple Type” section) as the code that goes with the _ arm:

    let dice_roll = 9;
    match dice_roll {
        3 => add_fancy_hat(),
        7 => remove_fancy_hat(),
        _ => (),
    }

    fn add_fancy_hat() {}
    fn remove_fancy_hat() {}











}
