# create a function that takes two numbers input and outputs their product

function multiply() {
    return $(($1 * $2))
}

multiply 3 4
echo $?


# NOTE: YOU CANNOT RETURN HIGHER THAN 256 BECAUSE THE RETURN IS ACTUALLY A STATUS
# HOWEVER: YOU CAN JUST DO THE MATH IN ECHO

echo $((300 * 2))