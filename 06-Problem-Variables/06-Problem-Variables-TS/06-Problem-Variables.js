"use strict";
// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.
let myMutable = 4;
const MY_IMMUTABLE = 5;
console.log(`myMutable: ${myMutable} MY_IMMUTABLE: ${MY_IMMUTABLE}`);
myMutable += MY_IMMUTABLE;
console.log(`myMutable: ${myMutable} MY_IMMUTABLE: ${MY_IMMUTABLE}`);
