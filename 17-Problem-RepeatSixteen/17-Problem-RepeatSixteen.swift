// Repeat problem 16 to work in the rote memorization of declaring most types, generating random numbers in a range, declaring a functions, using loops, using conditionals, and printing to console.

let nint: Int = Int.random(in: 1..<10);
let flote: Float = 32.32;
let chr: Character = "c";
let str: String = "hello";
let boo: Bool = true;

func incrementNint(num: Int) -> Int {
    var local_num: Int = num;
    if num > 5 {
        var adder: Int = Int.random(in: 1..<10);
        var loops: Int = Int.random(in: 1..<10);

        while loops > 0 {
            local_num+=adder;
            adder+=1;
            loops-=1;

        }
    }
  return local_num;
}

print("nint: \(nint) flote: \(flote) chr: \(chr) str: \(str) boo: \(boo)");
print("incrementNint(nint): \(incrementNint(num: nint))");
