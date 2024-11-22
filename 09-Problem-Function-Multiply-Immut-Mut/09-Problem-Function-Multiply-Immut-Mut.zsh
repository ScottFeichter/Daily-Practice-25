# create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.


myMut=7;
readonly myImmut=9;

function multiply() {
    return $(($1 * $2))
}

multiply $myMut $myImmut
echo $?

# NOTE: YOU CANNOT RETURN HIGHER THAN 256 BECAUSE THE RETURN IS ACTUALLY A STATUS
# HOWEVER: YOU CAN JUST DO THE MATH IN ECHO

echo $(($myMut * $myImmut))
