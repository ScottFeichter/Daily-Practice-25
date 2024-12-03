// Nick makes variables in many languages

fn main() {
    let mut hargar: &str = "unclescotty";
    println!("{hargar}");
    let mut unclescotty: &str = "get out of san fran";
    println!("{}", unclescotty);
    let mut something: &str = "mom please";
    println!("{}", something);
    let mut mom: &str = "let me use her hotspot at 2:20-3:30";
    println!("{mom}");

    fn nick_is_awesome(item: &str) -> &str {
        println!("Nick's {item} is awesome!!");
        return item;
    }

    nick_is_awesome("uncleScotty");
    nick_is_awesome("yay");

    fn caveman_is(cave: &str) -> &str {
        return "caveman {cave} is";
    }


}
