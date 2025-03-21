// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

var myMut: Int = 4;
let MY_IMMUT: Int = 5;

func isEven(num: Int) -> Bool{
    if(num % 2 == 0) {
        return true;
    }
    return false;
}

func evenIncrement(num1: Int, num2: Int) -> Int {
    if (isEven(num: num1)) {
        var count: Int = num2;
        var res: Int = num1;
        while count > 0 {
            res += 1;
            count -= 1;
        }
        return res;
    }
    return num1;
}

print("myMut: \(myMut) MY_IMMUT: \(MY_IMMUT) evenIncrement: \(evenIncrement(num1: myMut, num2: MY_IMMUT))");
