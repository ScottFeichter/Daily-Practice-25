// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans

let NINT: Int = Int.random(in: 1..<10);
let FLOTE: Float = 32.32;
let CHR: Character = "c";
let STR: String = "String";
let BOO: Bool = false;

var nums: [Int] = [0, 1, 2, 3];
var chars: [Character] = ["a", "b", "c", "d"];
var stirs: [String] = ["Hello", "World", "I", "am", "Scott"];
var boos: [Bool] = [true, false, false, true];

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
print("nums: \(nums) chars: \(chars) stirs: \(stirs) boos: \(boos)");
print("incrementNint(NINT): \(incrementNint(num: NINT))");
