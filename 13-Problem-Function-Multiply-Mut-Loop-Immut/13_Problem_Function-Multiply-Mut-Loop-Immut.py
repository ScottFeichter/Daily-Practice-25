# Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.


num1 = 4
NUM_2 = 7

def isEvenIncrement():
    global num1
    if num1 % 2 == 0:
        i = NUM_2
        while i > 0:
            num1+=1
            i-= 1
        return num1
    return num1

print(f"num1: {num1} NUM_2: {NUM_2} isEvenIncrement: {isEvenIncrement()}")
