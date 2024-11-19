// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

var myMutable: Int = 10;
let myImmutable: Int = 19;

print("myMutable: \(myMutable) myImmutable: \(myImmutable)");

myMutable += myImmutable;

print("myMutable: \(myMutable) myImmutable: \(myImmutable)");
