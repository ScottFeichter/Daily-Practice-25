function myFunc(someArg) {
  return someArg
}

myFunc.description = "this function takes in some argument and returns it"

myFunc.definition = "myFunc(someArg) { return someArg } "

console.log(myFunc);
console.log(myFunc.definition);
console.log(myFunc.description);


let someLet = "someLet";

someLet.type = "string";

console.log(someLet.type);

var someVar = "someVar";
someVar.type = "string";

console.log(someVar.type);


console.log(typeof someLet);
console.log(typeof someVar);

