# Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

myMutable = 4
MY_IMMUTABLE = 5

print(f"myMutable: {myMutable} MY_IMMUTABLE: {MY_IMMUTABLE}")

myMutable += MY_IMMUTABLE

print(f"myMutable: {myMutable} MY_IMMUTABLE: {MY_IMMUTABLE}")
