// Repeat problem 16 again to work rote memory of basic syntax.
var NINT = Math.floor(Math.random() * (10 - 1) + 1);
var FLOTE = 32.32;
var CHR = 'c';
var STR = "String";
var BOO = true;
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
console.log("NINT: ".concat(NINT, " FLOTE: ").concat(FLOTE, " CHR: ").concat(CHR, " STR: ").concat(STR, " BOO: ").concat(BOO));
console.log("incrementNint(NINT): ".concat(incrementNint(NINT)));
