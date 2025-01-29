fn main {



    enum IpAddrKind {
        V4,
        V6,
    }


    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;

    fn route(ip_kind: IpAddrKind) {}

    route(IpAddrKind::V4);
    route(IpAddrKind::V6);


    // the name of each enum variant that we define
    // it also becomes a function that constructs an instance of the enum
    enum IpAddr1 {
        V4(String),
        V6(String),
    }

    let home1 = IpAddr::V4(String::from("127.0.0.1"));

    let loopback1 = IpAddr::V6(String::from("::1"));


    // If we wanted to store V4 addresses as four u8 values but still express V6 addresses as one String value, we wouldn’t be able to with a struct. Enums handle this case with ease:

    enum IpAddr2 {
        V4(u8, u8, u8, u8),
        V6(String),
    }

    let home2 = IpAddr::V4(127, 0, 0, 1);

    let loopback2 = IpAddr::V6(String::from("::1"));


    // wanting to store IP addresses and encode which kind they are is so common that the standard library has a definition we can use! Let’s look at how the standard library defines IpAddr: it has the exact enum and variants that we’ve defined and used, but it embeds the address data inside the variants in the form of two different structs, which are defined differently for each variant:

    struct Ipv4Addr {
        // --snip--
    }

    struct Ipv6Addr {
        // --snip--
    }

    enum IpAddr {
        V4(Ipv4Addr),
        V6(Ipv6Addr),
    }

    // This code illustrates that you can put any kind of data inside an enum variant: strings, numeric types, or structs, for example. You can even include another enum! Also, standard library types are often not much more complicated than what you might come up with.

    // Note that even though the standard library contains a definition for IpAddr, we can still create and use our own definition without conflict because we haven’t brought the standard library’s definition into our scope.


    //////////////////////////////////////////////////////////////

    enum Message {
        Quit,
        Move { x: i32, y: i32 },
        Write(String),
        ChangeColor(i32, i32, i32),
    }


    // This enum has four variants with different types:

        // - Quit has no data associated with it at all.
        // - Move has named fields, like a struct does.
        // - Write includes a single String.
        // - ChangeColor includes three i32 values.

    // Defining an enum with variants such as the ones in Listing 6-2 is similar to defining different kinds of struct definitions, except the enum doesn’t use the struct keyword and all the variants are grouped together under the Message type. The following structs could hold the same data that the preceding enum variants hold:

    struct QuitMessage; // unit struct
    struct MoveMessage {
        x: i32,
        y: i32,
    }
    struct WriteMessage(String); // tuple struct
    struct ChangeColorMessage(i32, i32, i32); // tuple struct

    // But if we used the different structs, each of which has its own type, we couldn’t as easily define a function to take any of these kinds of messages as we could with the Message enum defined in Listing 6-2, which is a single type.

    // just as we’re able to define methods on structs using impl, we’re also able to define methods on enums:

    impl Message {
        fn call(&self) {
            // method body would be defined here
        }
    }

    let m = Message::Write(String::from("hello"));
    m.call();









}
