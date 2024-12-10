// Create a mutable variable identified as num1 and an immutable variable as num2. Create a function to check if num1 is even - if yes increment num1 by the amount of num2. If no then return num1.

// more scoping problems...need side quest


public class OneThreeProblemFunctionMultiplyMutLoopImmut {




    int isEvenIncrement() {
        if (num1 % 2 == 0) {
            int i = num2;
            while (i > 0) {
                num1++;
                i--;
            }
            return num1;
        }
        return num1;
    }

    public static void main(String[] args) {

        int num1 = 4;
        final int num2 = 7;

        System.out.println("isEvenIncrement: " + isEvenIncrement());



    }
}
