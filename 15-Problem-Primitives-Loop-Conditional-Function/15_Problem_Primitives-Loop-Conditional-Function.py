# Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.


nint=7
flote=32.32
chr='c'
str='str'
boo=False



def incrementCount(num):
    if num > 5:
        adder = 3
        loops = num
        while loops > 0:
            num+= adder
            adder+= 1
            loops-= 1
    return num

print(f"nint: {nint} flote: {flote} chr: {chr} str: {str} boo: {boo}")
print(f"incrementCount(nint): {incrementCount(nint)}")

