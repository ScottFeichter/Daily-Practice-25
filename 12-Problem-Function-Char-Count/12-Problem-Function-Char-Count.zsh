# Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.

# there is a problem here with line 14 chatgpt is not helping :()...may need to side quest...

moreThanTen=false

function charCount(){
    local input=$1

    count=0

    while read -n1 character; do
        count=$((count+1))
    done < <(echo -n "$input")

    echo $count

}

function isMoreThanTen() {
    if (($1 > 10)); then
        moreThanTen=true
    fi
    localMoreThanTen=$moreThanTen
    moreThanTen=false

    echo $localMoreThanTen
}

str1="Tomorrow"
str2="Pandemonium"
str3="The"

echo "str1: letter count = " $charCount(str1) " more than 10 = " $isMoreThanTen($charCount($str1));
echo "str2: letter count = " $charCount(str2) " more than 10 = " $isMoreThanTen($charCount($str2));
echo "str3: letter count = " $charCount(str3) " more than 10 = " $isMoreThanTen($charCount($str3));
