/*
Assign the variables repeatDaniel, repeatMark, and repeatBeyonce to values
by calling the repeatName(name) function so that the console.logs will
print out the expected values below.
*/
function repeatName(name) {
    return name + " " + name;
}
// Your code here
var repeatDaniel = repeatName("Daniel");
var repeatMark = repeatName("Mark");
var repeatBeyonce = "!!!" + repeatName("Beyonce") + "!!!";
console.log(repeatDaniel); // => "Daniel Daniel"
console.log(repeatMark); // => "Mark Mark"
console.log(repeatBeyonce); // => "!!!Beyonce Beyonce!!!"
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = repeatName;
