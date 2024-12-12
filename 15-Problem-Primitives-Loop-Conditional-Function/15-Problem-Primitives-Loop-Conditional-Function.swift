// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.



let nint: Int = 7;
let flote: Float = 32.32;
let chr: Character = "c";
let str: String = "Str";
let boo: Bool = false;

func incrementCount(num: Int) -> Int {
    var nu_num: Int = num;
    if num > 5 {
        var adder: Int = 3;
        var loops: Int = num;

        while loops > 0 {
            nu_num += adder;
            adder += 1;
            loops -= 1;
        }
    }
    return nu_num;
}


print("nint: \(nint) flote: \(flote) chr: \(chr) str: \(str) boo: \(boo)");
print("incrementCount(nint): \(incrementCount(num: nint))");
