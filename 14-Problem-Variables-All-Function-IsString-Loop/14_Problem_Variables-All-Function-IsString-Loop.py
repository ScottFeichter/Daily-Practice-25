# Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

num = 3
str1 = 'str1'
str2 = 'str2'
str3 = 'str3'
bools = False
char = 'c'
floats = 32.32

count = 0


def isString(primitive):
    return (type(primitive))

def printType(primitive):
    print(f"{primitive}")

def incrementCount(variable):
    if type(variable) == str:
        global count
        count+=1


print(num, str1, str2, str3, bools, char, floats, count)

printType(num)
printType(str1)
printType(str2)
printType(str3)
printType(bools)
printType(char)
printType(floats)


incrementCount(num)
incrementCount(str1)
incrementCount(str2)
incrementCount(str3)
incrementCount(bools)
incrementCount(char)
incrementCount(floats)

print(f'final count: {count}')
