# create a function with an if statement that returns true if an integer is even or false if it is odd
# print examples with the result for both outcomes to the log


def isEven(num):
    if num % 2 == 0:
        return True
    return False

print(46, isEven(46), 93, isEven(93))


