// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

var myMutable = 4;
let MY_IMMUTABLE = 5;

print("myMutable: \(myMutable) myMutable MY_IMMUTABLE: \(MY_IMMUTABLE)");

myMutable += MY_IMMUTABLE;

print("myMutable: \(myMutable) myMutable MY_IMMUTABLE: \(MY_IMMUTABLE)");
