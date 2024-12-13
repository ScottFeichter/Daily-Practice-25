# Do everything in problem 15 but make the int generated from randome between 1 - 10
import random

nint = random.randint(1, 10)
flote = 32.32
chr = 'c'
str = "hello"
boo = True

def incrementNint(num):
    if nint > 5:
        adder = random.randint(1,10)
        loops = random.randint(1, 10)

        print(f"adder: {adder}")
        print(f"loops: {loops}")

        while loops > 0:
            num+= adder
            adder+= 1
            loops-= 1

    return num

print(f"nint: {nint} flote: {flote} chr: {chr} str: {str} boo: {boo}")
print(incrementNint(nint))
