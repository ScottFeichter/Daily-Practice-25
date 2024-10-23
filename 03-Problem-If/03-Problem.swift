// create a function with an if statement that returns true if an integer is even or false if it is odd
// print examples with the result for both outcomes to the log


func isEven(num: Int) -> Bool {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}

print(46);
print(isEven(num: 46));
print(93);
print(isEven(num: 93));
