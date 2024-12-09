// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.


var num1: Int = 4;
let num2: Int = 7;

func isEvenIncrement() -> Int {
    if(num1 % 2 == 0) {
        var i: Int = num2;
        while i > 0 {
            num1+=1;
            i-=1;
        }
        return num1;
    }
    return num2;
}

print("num1: \(num1) num2: \(num2) isEvenIncrement: \(isEvenIncrement())");
