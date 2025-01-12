// Repeat problem 20 - make the mixed arrays tuples (they already are), fix the printing by reference, and add the Go language

let NINT: Int = Int.random(in: 1..<10);
let FLOTE: Float = 32.32;
let CHR: Character = "c";
let STR: String = "String";
let BOO: Bool = true;

var undv: Int; // can do this but it won't compile if used later ie to print and has not been assigned a value

var nums: [Int] = [0, 1, 2, 3];
var flotes: [Float] = [11.11, 22.22, 33.33, 44.44];
var chars: [Character] = ["a", "b", "c", "d"];
var stirs: [String] = ["This", "is", "stirs", "array"];
var boos: [Bool] = [true, false, false, true];

var unda: [Int]; // can do this but it won't compile if used later ie to print and has not been assigned a value

var mixtuple: (Int, Character, String, Bool) = (0, "b", "three", false);

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
print("nums: \(nums) flotes: \(flotes) chars: \(chars) stirs: \(stirs) boos: \(boos) ");
print("mixtuple: \(mixtuple)");
print("incrementNint(NINT): \(incrementNint(num: NINT))");
