# Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.

# this is looping infinately for some reason

declare -i num1=4
readonly num2=7

function isEvenIncrement(){
    r=$(($num1 % 2))
    echo $r
    if [[ $r -eq 0 ]]; then
        i=$num2
        while [[ $i -gt 0 ]]; do
            (($num1++))
            (($i--))
        done
        echo $num1
    fi
    echo $num1
}

echo "num1: " $num1 " num2: " $num2 " isEvenIncrement: ";

isEvenIncrement
