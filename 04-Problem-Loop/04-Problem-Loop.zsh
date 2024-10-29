# create a mutable variable sum = 1 and print it then create a basic for loop and increment sum 9 times to total 10 then print sum

sum=1

echo $sum

while [ $sum -lt 10 ]; # THIS SYNTAX IS VERY PARTICULAR AND VERY PECULIAR 
do
  ((sum++))
done

echo $sum
