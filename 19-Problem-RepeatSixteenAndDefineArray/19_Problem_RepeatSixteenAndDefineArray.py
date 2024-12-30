# Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans


import random

NINT = random.randint(1, 10)
CHR = 'c'
STR = "String"
BOO = False

nums = [0, 1, 2, 3] # these are actually "Lists"
chars = ['a', 'b', 'c', 'd'] # Py does not have built in support for arrays
stirs = ["Hello", "World", "I", "am", "Scott"] # but the NumPy library has array support
boos = [True, False, False, True]

def incrementNint(num):
    if num > 5:
      adder = random.randint(1, 10)
      loops = random.randint(1, 10)

      while loops > 0:
        num+= adder
        adder+=1
        loops-=1

    return num
