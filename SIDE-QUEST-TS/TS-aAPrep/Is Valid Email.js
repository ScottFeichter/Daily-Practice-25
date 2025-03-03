//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Is Valid Email

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a method isValid_email that takes in a string and returns a boolean indicating whether or not it is a valid email address.

// # For simplicity, we'll consider an email valid when it satisfies all of the following:
// # - contains exactly one @ symbol
// # - contains only lowercase alphabetic letters before the @
// # - contains exactly one . after the @

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function isValidEmail(str) {
  let parts = str.split("@");
  if (parts.length != 2) {
    return false;
  }

  if (!compare(parts[0])) {
    return false;
  }

  let period = parts[1].split(".");
  if (period.length != 2) {
    return false;
  }

  return true;
}

function compare(part) {
  let chars = part.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let v of chars) {
    if (!alphabet.includes(v)) {
      return false
    }
  }
  return true;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(isValidEmail("abc@xy.z")); // true
console.log(isValidEmail("jdoe@gmail.com")); // true
console.log(isValidEmail("jdoe@g@mail.com")); // false
console.log(isValidEmail("jdoe42@gmail.com")); // false
console.log(isValidEmail("jdoegmail.com")); // false
console.log(isValidEmail("az@email")); // false

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

