// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.
var myMutable = 4;
var MY_IMMUTABLE = 5;
console.log("myMutable: ".concat(myMutable, " MY_IMMUTABLE: ").concat(MY_IMMUTABLE));
myMutable += MY_IMMUTABLE;
console.log("myMutable: ".concat(myMutable, " MY_IMMUTABLE: ").concat(MY_IMMUTABLE));
