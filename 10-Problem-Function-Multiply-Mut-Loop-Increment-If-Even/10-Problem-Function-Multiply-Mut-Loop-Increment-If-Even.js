// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable


let myMut = 4;
const MY_IMMUT = 5;

const isEven = (num) => {
  return (num % 2 === 0);
}

const evenIncrement = (myMut, MY_IMMUT) => {
  if (isEven(myMut)) {
    for(let i = 0; i < MY_IMMUT; i++) {
      myMut++
    }
    return myMut;
  }
  return myMut;
}

console.log(`myMut: ${myMut} MY_IMMUT: ${MY_IMMUT} evenIncrement: ${evenIncrement(myMut, MY_IMMUT)}`);
