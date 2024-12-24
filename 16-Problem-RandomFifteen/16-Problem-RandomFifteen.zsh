# Do everything in problem 15 but make the int generated from randome between 1 - 10

RANGE=$((10-1+1));
declare -i nint=$(($(($RANDOM%$RANGE))+X));
declare -i flazFloate=32;
chr='c';
str="Hello";
boo=1;

function incrementNint() {
    local -i local_nint=$1;
    if (($local_nint > 5)); then
        local -i adder=$(($(($RANDOM%$((10-1+1))))+X));
        local -i loops=$(($(($RANDOM%$((10-1+1))))+X));
        echo "adder: " $adder;
        echo "loops: " $loops;
        while (($loops > 0)); do
            local_nint=$(($local_nint + $adder));
            adder=$(($adder + 1));
            loops=$(($loops - 1));
        done
    fi
    echo $local_nint;
}

echo "nint: " $nint " falzFloat: " $falzFloat " chr: " $chr " str: " $str " boo: " $boo

incrementNint $nint
