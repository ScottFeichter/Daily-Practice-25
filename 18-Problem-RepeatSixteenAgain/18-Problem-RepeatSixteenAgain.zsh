# Repeat problem 16 again to work rote memory of basic syntax.


declare -i -r NINT=$(($(($RANDOM%$((10-1+1))))+X));
declare -i -r NOTFLOTE=32;
readonly CHR='c';
readonly STR="String";
readonly BOO=1;

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

incrementNint $NINT
