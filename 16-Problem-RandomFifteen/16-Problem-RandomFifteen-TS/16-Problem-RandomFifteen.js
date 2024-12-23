// Do everything in problem 15 but make the int generated from randome between 1 - 10
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var nint = getRandomInteger(1, 10);
var flote = 32.32;
var chr = 'c';
var str = 'str';
var boo = true;
var incrementNint = function (num) {
    var local_nuNint = nint;
    if (nint > 5) {
        var adder = getRandomInteger(1, 10);
        var loops = getRandomInteger(1, 10);
        console.log("adder: ".concat(adder));
        console.log("loops: ".concat(loops));
        while (loops > 0) {
            local_nuNint += adder;
            adder++;
            loops--;
        }
    }
    return local_nuNint;
};
console.log("nint: ".concat(nint, " flote: ").concat(flote, " chr: ").concat(chr, " str: ").concat(str, " boo: ").concat(boo));
console.log("incrementNint(nint): ".concat(incrementNint(nint)));
