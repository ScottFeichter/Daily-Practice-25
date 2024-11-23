// create a mutable variable and an immutable variable. create a function multiply that returns the product of 2 arguments. print the values of the variables and print their product using the multiply function.


public class ZeroNineProblemFunctionMultplyImmutMut {

    static int multiply(int num1, int num2) {
        return num1 * num2;
    }


    public static void main(String[] args) {

        int myMutable = 7;
        final int MY_IMMUTABLE = 9;

        System.out.println("myMutable: " + myMutable + " MY_IMMUTABLE: " + MY_IMMUTABLE + " multiply: " + multiply(myMutable, MY_IMMUTABLE));


    }
}
