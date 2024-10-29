// create a mutable variable sum = 1 and print it then create a basic for loop and increment sum 9 times to total 10 then print sum

var sum = 1;

print(sum);

for _ in 1...9 { // there is no old fashioned for loop in swift
    sum += 1; // there must be the spaces here
}

print(sum);
