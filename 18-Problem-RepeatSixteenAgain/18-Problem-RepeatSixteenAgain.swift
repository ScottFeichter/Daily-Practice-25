// Repeat problem 16 again to work rote memory of basic syntax.

let NINT: Int = Int.random(in: 1..<10);
let FLOTE: Float = 32.32;
let CHR: Character = "c";
let STR: String = "String";
let BOO: Bool = true;

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

print("NINT: \(NINT) FLOTE: \(FLOTE) CHR: \(CHR) STR: \(STR) BOO: \(BOO)");

print("incrementNint(NINT): \(incrementNint(num: NINT))");
