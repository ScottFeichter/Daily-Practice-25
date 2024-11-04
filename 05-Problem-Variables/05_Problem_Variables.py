# Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

mutable = 5
IMMUTABLE = 6

print(f"mutable: {mutable} immutable: {IMMUTABLE}")

mutable+= IMMUTABLE

print(f"mutable: {mutable} immutable: {IMMUTABLE}")
