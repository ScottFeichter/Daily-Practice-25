# Repeat problem 16 to work in the rote memorization of declaring most types, generating random numbers in a range, declaring a functions, using loops, using conditionals, and printing to console.
import random

NINT = random.randint(1, 10)
FLOTE = 32.32
CHR = 'c'
STR = "hello"
BOO = True

def incrementNINT(num):
    if num > 5:
        adder = random.randint(1, 10)
        loops = random.randint(1, 10)

        while loops > 0:
            num+= adder
            adder+= 1
            loops-=1
    return num

print(f"nint: {NINT} flote: {FLOTE} chr: {CHR} str: {STR} boo: {BOO}")
print(f"incrementNINT(NINT): {incrementNINT(NINT)}")


