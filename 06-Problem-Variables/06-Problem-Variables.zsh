# Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

myMutable=4;
readonly MY_IMMUTABLE=5;

echo "myMutable: " $myMutable " MY_IMMUTABLE: " $MY_IMMUTABLE

((myMutable+=$MY_IMMUTABLE))

echo "myMutable: " $myMutable " MY_IMMUTABLE: " $MY_IMMUTABLE
