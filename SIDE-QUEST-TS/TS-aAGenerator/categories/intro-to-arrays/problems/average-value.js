/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/
var avgVal = function (nums) {
    if (nums.length === 0)
        return null;
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        sum += num;
    }
    return sum;
};
console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;
