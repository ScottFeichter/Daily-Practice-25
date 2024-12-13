// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.
var nint = 7;
var flote = 32.32;
var chr = 'c';
var str = "hello";
var boo = false;
function incrementCount(num) {
    if (num > 5) {
        var adder = 3;
        var loops = num;
        while (loops > 0) {
            num += adder;
            adder++;
            loops--;
        }
    }
    return num;
}
console.log("nint: ".concat(nint, " flote: ").concat(flote, " chr: ").concat(chr, " str: ").concat(str, " boo: ").concat(boo));
console.log("incrementCount(nint): ".concat(incrementCount(nint)));
