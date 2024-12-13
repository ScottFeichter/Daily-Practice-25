// Do everything in problem 15 but make the int generated from randome between 1 - 10

let nint: Int = Int.random(in: 1..<10);
let flote: Float = 32.32;
let chr: Character = "C";
let str: String = "Hello";
let boo: Bool = true;

func incrementNint(num: Int) -> Int {
    var local_num: Int = num;
    if num > 5 {
        var adder: Int = Int.random(in: 1..<10);
        var loops: Int = Int.random(in: 1..<10);

        print("adder: \(adder)");
        print("loops: \(loops)");

        while loops > 5 {
            local_num+=adder;
            adder+=1;
            loops-=1;
        }

    }
    return local_num;
}

print("nint: \(nint) flote: \(flote) chr: \(chr) str: \(str) boo: \(boo)");
print(incrementNint(num: nint));
