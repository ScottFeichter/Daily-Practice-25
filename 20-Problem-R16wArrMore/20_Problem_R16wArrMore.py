# Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible

import random

NINT = random.randint(1, 10)
FLOTE = 32.32
CHR = 'c'
STR = "String"
BOO = False

undv = None

nums = [0, 1, 2, 3] # actually lists
flotes = [11.11, 22.22, 33,33, 44.44]
chars = ['a', 'b', 'c', 'd']
stirs = ["This", "is", "stirs", "array"]
boos = [True, False, False, True]

mixta = [0, 'b', "three", False]
unda = []

def increment_NINT(num):
    if num > 5:
        adder = random.randint(1, 10)
        loops = random.randint(1, 10)

        while(loops > 0):
            num+=adder
            adder+=1
            loops-=1
    return num

print(f"NINT: {NINT} FLOTE: {FLOTE} CHR: {CHR} STR: {STR} BOO: {BOO} undv: {undv}")
print(f"nums: {nums} flotes: {flotes} chars: {chars} stirs: {stirs} boos: {boos} mixta: {mixta} unda: {unda}")
print(f"increment_NINT(NINT): {increment_NINT(NINT)}")
