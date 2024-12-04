// Create a mutable and an immutable. Create a function that will increment the mutable in the amount of the immutable  using a loop if the mutable is even. If the immutable is odd return the mutable

public class OneZeroProblemFunctionMultiplyLoopIncrementIfEven {

    static boolean isEven(int num) {
        if(num % 2 == 0) {
            return true;
        }
        return false;
    }

    static int evenIncrement(int num1, int num2) {
        if(isEven(num1)) {
            while(num2 > 0) {
                num1++;
                num2--;
            }
            return num1;
        }
        return num1;
    }




    public static void main(String[] args) {

        int myMutable = 4;
        final int MY_IMMUTABLE = 5;

        System.out.println("myMutable: " + myMutable + " MY_IMMUTABLE: " + MY_IMMUTABLE + " evenIncrement: " + evenIncrement(myMutable, MY_IMMUTABLE));



    }
}
