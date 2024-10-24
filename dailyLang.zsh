#!/bin/zsh

# To make a text file executable cd to the directory then run

# chmod +x myscript.zsh

# To run it ./myscript.zsh argument1 argument2 etc...


problem_number=$1
problem_description=$2

folder_name="$problem_number-Problem-$problem_description"



nums=(Zero One Two Three Four Five Six Seven Eight Nine)

first_num=$((${problem_number[1]} + 1))
second_num=$((${problem_number[2]} + 1))
problem_num_name="$nums[$first_num]:l_$nums[$second_num]:l_problem_$problem_description:l"

java_prob_num_name="$nums[$first_num]$nums[$second_num]Problem$problem_description"

mkdir $folder_name
cd $folder_name


zsh="$problem_number-Problem-$problem_description.zsh"
touch $zsh

js="$problem_number-Problem-$problem_description.js"
touch $js

py="${problem_number}_Problem_$problem_description.py"
touch $py

swift="$problem_number-Problem-$problem_description.swift"
touch $swift

ts="$problem_number-Problem-$problem_description-TS"
mkdir $ts
cd $ts
touch "$problem_number-Problem-$problem_description.ts"
cd ..



cpp="$problem_number-Problem-$problem_description-CPP"
mkdir $cpp
cd $cpp
touch "$problem_number-Problem-$problem_description.cpp"
cd ..


java="${problem_number}_Problem_${problem_description}_JAVA"
mkdir $java
cd $java
touch "$java_prob_num_name.java"
cd ..


r="${problem_num_name}_rust"
cargo new $r



gaacp
clear
