# Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable


declare -i my_mutable=4; #declare lets us use type flag
readonly my_immutable=5;

function isEven() {

    r=$(($1 % 2))
    echo $r
    if [[ $r -eq 0 ]] # THE SPACES HERE ARE NEEDED OTHERWISE IT WON'T WORK...SHELL SCRIPT IS WEIRD
    then return 1
    else return 0
    fi

}

function evenIncrement() {
    s=$((isEven $1))
    echo $s
    if [[ $s -eq 0 ]]
    then return $2
    else while [ $2 -gt 0 ]; # THIS SYNTAX IS VERY PARTICULAR AND VERY PECULIAR
         do (($1++))
         done
    fi
    return $1
}

echo "my_mutable: " $my_mutable "my_immutable: " $my_immutable

evenIncrement $my_mutable $my_immutable;

echo $?
