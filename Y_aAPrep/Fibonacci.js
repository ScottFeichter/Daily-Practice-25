//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Fibonacci

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// The fibonacci sequence is a sequence of numbers whose first and second elements are 1.
// To generate further elements of the sequence we take the sum of the previous two elements.
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8.
// Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function fibonacci(length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  }

  let seq = [1,1];

  while (seq.length < length) {
    let last = seq[seq.length - 1];
    let secondToLast = seq[seq.length - 2];
    let nextEle = last + secondToLast;
    seq.push(nextEle);
  }

  return seq;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//


