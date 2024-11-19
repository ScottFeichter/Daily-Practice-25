// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.
var myMutable = 10;
var myImmutable = 19;
console.log("myMutable: ".concat(myMutable, " myImmutable: ").concat(myImmutable));
myMutable += myImmutable;
console.log("myMutable: ".concat(myMutable, " myImmutable: ").concat(myImmutable));
