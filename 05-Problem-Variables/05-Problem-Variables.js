// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

let mutable = 5;
const immutable = 6;

console.log(`mutable: ${mutable} immutable: ${immutable}`);

mutable+= immutable;

console.log(`mutable: ${mutable} immutable: ${immutable}`);


