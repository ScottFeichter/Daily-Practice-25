# Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

mutable=5;
readonly IMMUTABLE=6;

echo "mutable: $mutable IMMUTABLE: $IMMUTABLE"

((mutable+=$IMMUTABLE))

echo "mutable: $mutable IMMUTABLE: $IMMUTABLE"
