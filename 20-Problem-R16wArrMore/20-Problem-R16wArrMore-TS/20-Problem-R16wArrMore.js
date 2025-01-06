// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible
var NINT = Math.floor(Math.random() * (10 - 1) + 1);
var FLOTE = 32.32;
var CHR = 'c';
var STR = "string";
var BOO = false;
var undv;
var nums = [0, 1, 2, 3];
var flotes = [11.11, 22.22, 33.33, 44.44];
var chars = ['a', 'b', 'c', 'd'];
var stirs = ["Hello", "World", "I", "am", "Scott"];
var boos = [true, false, false, true];
var mixta = [0, 'b', "three", false];
var unda = [];
var incrementNint = function (num) {
    if (num > 5) {
        var adder = Math.floor(Math.random() * (10 - 1) + 1);
        var loops = Math.floor(Math.random() * (10 - 1) + 1);
        while (loops > 0) {
            num += adder;
            adder++;
            loops--;
        }
    }
    return num;
};
console.log("NINT: ".concat(NINT, " FLOTE: ").concat(FLOTE, " CHR: ").concat(CHR, " STR: ").concat(STR, " BOO: ").concat(BOO, " undv: ").concat(undv));
console.log("nums: ".concat(nums, " chars: ").concat(chars, " stirs: ").concat(stirs, " boos: ").concat(boos, " mixta: ").concat(mixta, " unda: ").concat(unda));
console.log("incrementNint(NINT): ".concat(incrementNint(NINT)));
