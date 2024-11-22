"use strict";
// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.
let myMutable = 10;
const myImmutable = 19;
console.log(`myMutable: ${myMutable} myImmutable: ${myImmutable}`);
myMutable += myImmutable;
console.log(`myMutable: ${myMutable} myImmutable: ${myImmutable}`);
