# Repeat problem 16 again to work rote memory of basic syntax.
import random

NINT = random.randint(1, 10)
FLOTE = 32.32
CHR = 'c'
STR = "String"
BOO = True

def increment_NINT(num):
    if num > 5:
        adder = random.randint(1, 10)
        loops = random.randint(1, 10)

        while loops > 0:
            num+= adder
            adder+=1
            loops-=1

    return num

print(f"NINT: {NINT} FLOTE: {FLOTE} CHR: {CHR} STR: {STR} BOO: {BOO}")
print(f"increment_NINT(NINT): {increment_NINT(NINT)}")


