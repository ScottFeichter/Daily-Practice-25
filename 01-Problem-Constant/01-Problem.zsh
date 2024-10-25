# Make two immutable integer variables and add them together in a third variable

# chmod +x myscript.zsh

# To run it ./myscript.zsh argument1 argument2 etc...

readonly a=8
declare -r b=16
c=$((a + b))

echo $c
