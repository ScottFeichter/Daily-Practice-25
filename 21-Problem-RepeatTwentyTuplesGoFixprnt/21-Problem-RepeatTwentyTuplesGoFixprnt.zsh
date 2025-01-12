# Repeat problem 20 - make the mixed arrays tuples (they already are), fix the printing by reference, and add the Go language

# not printing mixtuple correctly

declare -i -r NINT=$(($(($RANDOM%$((10-1+1))))+X));
declare -i -r NOTFLOTE=32;
readonly CHR='c';
declare -r STR="String";
readonly BOO=1;

declare -i undv; # this should work the output would be nothing

nums=(0 1 2 3);
notflotes=(0 1 2 3);
chars=(a b c d);
stirs=(This is stirs array);
boos=(true false false true);

mixtuple=(0 b three false);
declare -a unda=();

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

echo "NINT: " $NINT " NOTFLOTE: " $NOTFLOTE " CHR: " $CHR " STR: " $STR " BOO: " $BOO " undv: " $undv

echo "nums: " $nums " notflotes: " $notflotes " chars: " $chars " stirs: " $stirs " boos: " $boos " mixtuple: " $mixtuple " unda: " $unda

incrementNint $NINT
