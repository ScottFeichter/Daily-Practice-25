//--------------------------------------------------------------------------TITLE---------------------------------------------------------------//

// Aba Translate

//--------------------------------------------------------------------------PROBLEM---------------------------------------------------------------//

// Aba is a German children’s game where secret messages are exchanged.
// In Aba, after every vowel we add “b” and add that same vowel.
// Write a method `aba_translate` that takes in a sentence string and returns a new sentence representing its Aba translation.
// Capitalized words of the original sentence should be properly capitalized in the new sentence.

//-------------------------------------------------------------------------SOLUTION---------------------------------------------------------------//

function aba_translate(sentence) {
  let result = [];
  let vowels = "aeiouAEIOU";
  let words = sentence.split(" ");
  let oldWord;
  let oldWordArr = [];
  let newWordArr = [];
  let newWord;
  for (let i = 0; i < words.length; i++) {
    oldWord = words[i];
    oldWordArr = oldWord.split("");
    for (let i = 0; i < oldWordArr.length; i++) {
      if (vowels.includes(oldWordArr[i])) {
        newWordArr.push(oldWordArr[i]);
        newWordArr.push('b');
        newWordArr.push(oldWordArr[i]);
      } else {
        newWordArr.push(oldWordArr[i]);
      }
    }
    newWord = newWordArr.join("");
    result.push(newWord);
    newWordArr = [];
    newWord = "";
  }
  console.log(result);
  return result;
}

//-------------------------------------------------------------------------TEST CASES---------------------------------------------------------------//

aba_translate("Cats and dogs"); // “Cabats aband dobogs”
aba_translate("Everyone can code"); // “Ebeveberyobonebe caban cobodebe”
aba_translate("Africa is Africa in German"); // “Abafribicaba ibis Abafribicaba ibin Gebermaban”

//----------------------------------------------------------------------PSEUDO SOLUTION---------------------------------------------------------------//

