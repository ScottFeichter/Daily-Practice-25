#!/bin/zsh

# To make a text file executable cd to the directory then run

# chmod +x myscript.zsh

# To run it ./myscript.zsh argument1 argument2 etc...


problem_number=$1
problem_description=$2


folder_name="$problem_number'-'Problem'-'$problem_description"

mkdir $folder_name
cd $folder_name

ts="$problem_number'-'Problem'-'$problem_description'-'TS"
mkdir ts


#js
#java = $folder_name + "
#cpp
#r
#py