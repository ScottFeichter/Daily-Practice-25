# create a function with an if statement that returns true if an integer is even or false if it is odd
# print examples with the result for both outcomes to the log

function isEven() {
    r=$(($1 % 2))
    if [[ $r -eq 0 ]] # THE SPACES HERE ARE NEEDED OTHERWISE IT WON'T WORK...SHELL SCRIPT IS WEIRD
    then echo true
    else echo false
    fi
}


isEven 43

isEven 96
