// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

var mutable = 5;
let immutable = 6;

print("mutable: \(mutable) immutable: \(immutable)");

mutable += immutable;

print("mutable: \(mutable) immutable: \(immutable)");
