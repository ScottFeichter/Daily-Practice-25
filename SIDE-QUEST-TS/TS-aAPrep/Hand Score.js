//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Hand Score

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Write a function handScore that takes in a string representing a hand of cards and returns it's total score.
// You can assume the letters in the string are only A, K, Q, J. A is worth 4 points, K is 3 points, Q is 2 points, and J is 1 point.
// The letters of the input string are not necessarily uppercase.

//-------------------------------------------------------------------------SOLUTION 1---------------------------------------------------------------//

function handScore(hand) {
  let score = 0;
  hand = hand.toUpperCase();


  for (let i = 0; i < hand.length; i++) {
    switch (hand[i]) {
      case "A":
        score += 4;
        break;
      case "K":
        score += 3;
        break;
      case "Q":
        score += 2;
        break;
      case "J":
        score += 1;
        break;
      default:
          score += 0;
        break;
    }
  }
  return score;
}

//-------------------------------------------------------------------------SOLUTION 2---------------------------------------------------------------//

function handScore(hand) {
  const points = {
    "A": 4,
    "K": 3,
    "Q": 2,
    "J": 1
  };
  let score = 0;

  for(let i = 0; i < hand.length; i++){
    score += points[hand[i].toUpperCase()];
  }

  return score;
}


//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

console.log(handScore("AQAJ")); //11
console.log(handScore("jJka")); //9

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

