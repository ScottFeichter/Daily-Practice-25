// Repeat problem 16 to work in the rote memorization of declaring most types, generating random numbers in a range, declaring a functions, using loops, using conditionals, and printing to console.
var nint = Math.floor(Math.random() * (10 - 1) + 1);
var flote = 32.32;
var chr = 'c';
var str = "hello";
var boo = true;
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
console.log("nint: ".concat(nint, " flote: ").concat(flote, " chr: ").concat(chr, " str: ").concat(str, " boo: ").concat(boo));
console.log("incrementNint(nint): ".concat(incrementNint(nint)));
