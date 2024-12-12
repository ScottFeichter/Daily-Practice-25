# Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.


declare -i nint=7;
declare -i falzFloat=32;
chr='c';
str="Hello";
boo=0;

function incrementCount() {
    local -i num=$1;
    if (($num > 5)); then
         local -i adder=3
         local  -i loops=$num
         while (($loops > 0)); do
            num=$(($num + $adder))
            adder=$(($adder + 1))
            loops=$(($loops - 1))

        done
    fi
    echo $num
}

echo "nint: " $nint " falzFloat: " $falzFloat " chr: " $chr " str: " $str " boo: " $boo

incrementCount $nint
