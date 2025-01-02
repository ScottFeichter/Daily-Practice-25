// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible


let NINT: Int = Int.random(in: 1..<10);
let FLOTE: Float = 32.32;
let CHR: Character = "c";
let STR: String = "String";
let BOO: Bool = true;

var undv: Int // can do this but it won't compile if used later ie to print and has not been assigned a value

var nums: [Int] = [0, 1, 2, 3];
var flotes: [Float] = [11.11, 22.22, 33.33, 44.44];
var chars: [Character] = ["a", "b", "c", "d"];
var stirs: [String] = ["This", "is", "stirs", "array"];
var boos: [Bool] = [true, false, false, true];

// var mixta: [] = [0, "b", "three", false]; NOT POSSIBLE IN SWIFT BUT SHOULD STUDY ANY, SOME, AND PROTOCOL FOR WORK AROUNDS

var unda: [Int];  // can do this but it won't compile if used later ie to print and has not been assigned a value

func incrementNint(num: Int) -> Int {
    var local_num: Int = num;
    if num > 5{
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
print("nums: \(nums) chars: \(chars) stirs: \(stirs) boos: \(boos) ");
print("incrementNint(NINT): \(incrementNint(num: NINT))");
