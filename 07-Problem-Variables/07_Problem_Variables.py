# Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

my_mutable = 10
MY_IMMUTABLE = 19

print(f"my_mutable: {my_mutable} my_immutable: {MY_IMMUTABLE}")

my_mutable += MY_IMMUTABLE

print(f"my_mutable: {my_mutable} my_immutable: {MY_IMMUTABLE}")


