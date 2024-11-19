// Create a myMutable variable and an myImmutable variable and print each in one log.  Add the myImmutable variable to the myMutable variable. Again print both in a new log.

let myMutable = 10;
const myImmutable = 19;

console.log(`myMutable: ${myMutable} myImmutable: ${myImmutable}`);

myMutable += myImmutable;

console.log(`myMutable: ${myMutable} myImmutable: ${myImmutable}`);
