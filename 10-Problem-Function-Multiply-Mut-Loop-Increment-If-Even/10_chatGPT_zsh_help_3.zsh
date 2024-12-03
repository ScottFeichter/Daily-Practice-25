
#PROMPT:
#====================================================
# translate this code to shell script:

# // Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable


# let myMut = 4;
# const MY_IMMUT = 5;

# const isEven = (num) => {
#   return (num % 2 === 0);
# }

# const evenIncrement = (myMut, MY_IMMUT) => {
#   if (isEven(myMut)) {
#     for(let i = 0; i < MY_IMMUT; i++) {
#       myMut++
#     }
#     return myMut;
#   }
#   return myMut;
# }

# console.log(myMut: ${myMut} MY_IMMUT: ${MY_IMMUT} evenIncrement: ${evenIncrement(myMut, MY_IMMUT)});


#RESPONSE
#====================================================

#!/bin/bash

# Create a mutable and an immutable
declare -i myMut=4
readonly MY_IMMUT=5

# Function to check if a number is even
isEven() {
    local num=$1
    ((num % 2 == 0)) # Returns 0 (success) if even, 1 (failure) if odd
}

# Function to increment the mutable by the immutable using a loop
evenIncrement() {
    local mut=$1
    local imm=$2

    # Check if the mutable is even
    if isEven $mut; then
        for ((i = 0; i < imm; i++)); do
            ((mut++))
        done
    fi

    echo $mut # Return the final value of mutable
}

# Output the initial values and result of the function
echo "myMut: $myMut MY_IMMUT: $MY_IMMUT"
result=$(evenIncrement $myMut $MY_IMMUT)
echo "evenIncrement: $result"
