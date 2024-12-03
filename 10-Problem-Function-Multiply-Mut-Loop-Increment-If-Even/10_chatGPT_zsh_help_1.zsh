#PROMPT:
#====================================================
# please help me with this shell script - there is something wrong:

# declare -i my_mutable=4; #declare lets us use type flag
# readonly my_immutable=5;

# function isEven() {

#     r=$(($1 % 2))
#     echo $r
#     if [[ $r -eq 0 ]] # THE SPACES HERE ARE NEEDED OTHERWISE IT WON'T WORK...SHELL SCRIPT IS WEIRD
#     then return 1
#     else return 0
#     fi

# }

# function evenIncrement() {
#     s=$((isEven $1))
#     echo $s
#     if [[ $s -eq 0 ]]
#     then return $2
#     else while [ $2 -gt 0 ]; # THIS SYNTAX IS VERY PARTICULAR AND VERY PECULIAR
#          do (($1++))
#          done
#     fi
#     return $1
# }

# echo "my_mutable: " $my_mutable "my_immutable: " $my_immutable

# evenIncrement $my_mutable $my_immutable;

# echo $?




#RESPONSE
#====================================================
# There are several issues in your shell script that may be causing problems. Let's address them step by step:

# Misunderstanding return and echo: In shell scripting, the return statement is used to return exit status (an integer between 0 and 255). If you want to return or pass values, you need to use echo and capture the output.

# declare -i in functions: Variables declared with declare -i will treat their values as integers, but outside functions, this might cause issues depending on the shell's behavior. Instead, directly use arithmetic expressions.

# Logical errors: In the isEven function, you echo $r but also return 1 or 0, which might be confusing. If you're only using return for exit status, you don't need echo.

# evenIncrement logic: The function modifies $1 in the loop but doesn't update the variable outside the function. Positional parameters in shell scripting are not references to the original variables. You need to pass values back explicitly.

# Here’s the corrected script:


declare -i my_mutable=4
readonly my_immutable=5

function isEven() {
    local r=$(($1 % 2)) # Calculate remainder
    if [[ $r -eq 0 ]]; then
        return 0 # Even -> Return 0 (success)
    else
        return 1 # Odd -> Return 1 (failure)
    fi
}

function evenIncrement() {
    local number=$1
    local increment=$2

    if isEven $number; then
        # Number is even, increment it by $increment
        ((number += increment))
    else
        # Number is odd, increment one by one
        while [[ $increment -gt 0 ]]; do
            ((number++))
            ((increment--))
        done
    fi
    echo $number # Pass the updated value
}

echo "my_mutable: $my_mutable, my_immutable: $my_immutable"

# Capture the new value of `my_mutable` from `evenIncrement`
my_mutable=$(evenIncrement $my_mutable $my_immutable)

echo "Updated my_mutable: $my_mutable"

# Key Changes:
# Avoid modifying $1 directly: Use a local variable inside functions for computations and echo the result.
# Correct loop syntax: Ensure the decrement in the while loop works as expected.
# Use isEven with its exit status: Leverage return for logical checks.
# When you run the corrected script, it will display the updated my_mutable value after processing.
