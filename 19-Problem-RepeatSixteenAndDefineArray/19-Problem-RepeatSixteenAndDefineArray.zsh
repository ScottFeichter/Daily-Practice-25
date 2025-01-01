# Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans

# printing of the arrays is only doing 0 index

declare -i -r NINT=$(($(($RANDOM%$((10-1+1))))+X));
declare -i -r NOTFLOTE=32;
readonly CHR='c';
readonly STR="String";
readonly BOO=1;

nums=(0 1 2 3);
notflotes=(0 1 2 3);
chars=(a b c d);
stirs=(Hello World I am Scott);
boos=(true false false true);


function incrementNint() {
    local -i local_num=$1;
    if (($local_num > 5)); then
        local -i adder=$(($(($RANDOM%$((10-1+1))))+X));
        local -i loops=$(($(($RANDOM%$((10-1+1))))+X));

        while (($loops > 0)); do
            local_num=$(($local_num + $adder));
            adder=$(($adder + 1));
            loops=$(($loops - 1));
        done
    fi
    echo $local_num;
}

echo "NINT: " $NINT " NOTFLOTE: " $NOTFLOTE " CHR: " $CHR " STR: " $STR " BOO: " $BOO

echo "nums: " $nums " notflotes: " $notflotes " chars: " $chars " stirs: " $stirs " boos: " $boos

incrementNint $NINT
