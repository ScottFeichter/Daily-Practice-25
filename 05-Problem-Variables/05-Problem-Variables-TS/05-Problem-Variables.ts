// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

let mutable: number = 5;
const IMMUTABLE: number = 6;

console.log(`mutable: ${mutable} IMMUTABLE: ${IMMUTABLE}`);

mutable += IMMUTABLE;

console.log(`mutable: ${mutable} IMMUTABLE: ${IMMUTABLE}`);
