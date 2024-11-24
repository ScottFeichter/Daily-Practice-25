# Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

my_mut = 4
MY_IMMUT = 5

def isEven(num):
    if num % 2 == 0:
        return True
    return False

def evenIncrement(num1, num2):
    if isEven(num1) == True:
        while num2 > 0:
            num1+=1
            num2-=1
        return num1
    return num1


print(f"my_mut: {my_mut} MY_IMMUT: {MY_IMMUT} evenIncrement: {evenIncrement(my_mut, MY_IMMUT)}")


