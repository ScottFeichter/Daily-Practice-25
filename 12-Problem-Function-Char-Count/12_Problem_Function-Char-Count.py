# Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.


count = 0
more_than_ten = False

def char_count(str):
    length = len(str)
    global count # this must be done to modify the global in the function.
    while length > 0:
        count+= 1
        length-= 1
    local_count = count
    count = 0
    return local_count

def is_more_than_ten(this_count):
    more_than_ten = (this_count > 0)

    local_more_than_ten = more_than_ten

    return local_more_than_ten

str1 = "Tomorrow"
str2 = "Pandemonium"
str3 = "The"

print(f"str1: letter count = {char_count(str1)} more than 10 = {is_more_than_ten(char_count(str1))}")
print(f"str2: letter count = {char_count(str2)} more than 10 = {is_more_than_ten(char_count(str2))}")
print(f"str3: letter count = {char_count(str3)} more than 10 = {is_more_than_ten(char_count(str3))}")
