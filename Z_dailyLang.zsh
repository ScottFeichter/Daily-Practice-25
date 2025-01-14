#!/bin/zsh

# To make a text file executable cd to the directory then run

# chmod +x myscript.zsh

# To run it ./myscript.zsh argument1 argument2 etc...


problem_number=$1
problem_description=$2
problem_prompt=$3

folder_name="$problem_number-Problem-$problem_description"

echo $folder_name>>allProblems.txt
echo $problem_prompt>>allProblems.txt
echo " ">>allProblems.txt

nums=(Zero One Two Three Four Five Six Seven Eight Nine)

first_num=$((${problem_number[1]} + 1))
second_num=$((${problem_number[2]} + 1))
problem_num_name="$nums[$first_num]:l_$nums[$second_num]:l_problem_$problem_description:l"

java_prob_num_name="$nums[$first_num]$nums[$second_num]Problem$problem_description"

go_prob_num_name="$nums[$first_num]$nums[$second_num]Problem$problem_description"


#################################################################################################


mkdir $folder_name
cd $folder_name

txt="$problem_number-Problem-$problem_description.txt"
touch $txt
echo $problem_prompt>>$txt


zsh="$problem_number-Problem-$problem_description.zsh"
touch $zsh
echo "# $problem_prompt">>$zsh

js="$problem_number-Problem-$problem_description.js"
touch $js
echo "// $problem_prompt">>$js

py="${problem_number}_Problem_$problem_description.py"
touch $py
echo "# $problem_prompt">>$py

swift="$problem_number-Problem-$problem_description.swift"
touch $swift
echo "// $problem_prompt">>$swift


# making a package instead - see below
# go="$problem_number-Problem-$problem_description.go"
# touch $go
# echo "// $problem_prompt">>$go


ts="$problem_number-Problem-$problem_description-TS"
mkdir $ts
cd $ts

tsfile="$problem_number-Problem-$problem_description.ts"
touch $tsfile

echo "// $problem_prompt">>$tsfile

tsc --init
cd ..



cpp="$problem_number-Problem-$problem_description-CPP"
mkdir $cpp
cd $cpp

cppfile="$problem_number-Problem-$problem_description.cpp"
touch $cppfile

echo "// $problem_prompt">>$cppfile
cd ..




go="$problem_number-Problem-$problem_description-GO"
mkdir $go
cd $go

go mod init $go

gop="$go-Package"
mkdir $gop
cd $gop

gofile="$go_prob_num_name.go"
touch $gofile
cat << EOF > $gofile
// $problem_prompt

package $gofile

import (
	"fmt"
	"math/rand"
)

func main {


}
EOF
cd ../..



java="${problem_number}_Problem_${problem_description}_JAVA"
mkdir $java
cd $java

javafile="$java_prob_num_name.java"
touch $javafile

cat << EOF > $javafile
// $problem_prompt

import java.io.*;

public class $java_prob_num_name {

   public static void main(String[] args){

   }
}
EOF
cd ..



r="${problem_num_name}_rust"
cargo new $r
cat << EOF > $r/src/main.rs
// $problem_prompt

fn main() {
    println!("Hello, world!");
}
EOF



gaacp
clear
