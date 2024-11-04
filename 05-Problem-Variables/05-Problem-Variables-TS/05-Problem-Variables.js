// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.
var mutable = 5;
var IMMUTABLE = 6;
console.log("mutable: ".concat(mutable, " IMMUTABLE: ").concat(IMMUTABLE));
mutable += IMMUTABLE;
console.log("mutable: ".concat(mutable, " IMMUTABLE: ").concat(IMMUTABLE));
