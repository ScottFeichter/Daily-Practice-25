

#PROMPT:
#====================================================
# Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

#RESPONSE
#====================================================
# Here's the shell script that satisfies your requirements:

#!/bin/bash

# Declare a mutable and an immutable variable
declare -i mutable=4
readonly immutable=5

# Function to increment the mutable
function processMutable() {
    local mut=$1
    local imm=$2

    # Check if immutable is odd
    if ((imm % 2 != 0)); then
        echo $mut
        return
    fi

    # Check if mutable is even and increment in a loop
    if ((mut % 2 == 0)); then
        for ((i = 0; i < imm; i++)); do
            ((mut++))
        done
    fi

    echo $mut
}

# Display initial values
echo "Initial mutable: $mutable, immutable: $immutable"

# Update mutable using the function
mutable=$(processMutable $mutable $immutable)

# Display updated value
echo "Updated mutable: $mutable"


# Explanation of the Script:
# Variable Declaration:

# mutable: Declared as mutable with declare -i to enforce integer arithmetic.
# immutable: Declared as immutable with readonly.
# Function Logic:

# The function checks if the immutable variable is odd. If so, it immediately returns the mutable's value.
# If the immutable is even, it checks if the mutable is even. If so, it increments the mutable in a loop based on the value of the immutable.
# Increment Logic:

# A for loop increments the mutable by one for each iteration, up to the value of the immutable.
# Return Values:

# The function uses echo to return the updated value of the mutable, which is then captured and reassigned to mutable.
# Output Example:
# If you run this script with mutable=4 and immutable=5:

# bash
# Copy code
# Initial mutable: 4, immutable: 5
# Updated mutable: 4
# If you set immutable=6 (even):

# bash
# Copy code
# Initial mutable: 4, immutable: 6
# Updated mutable: 10
