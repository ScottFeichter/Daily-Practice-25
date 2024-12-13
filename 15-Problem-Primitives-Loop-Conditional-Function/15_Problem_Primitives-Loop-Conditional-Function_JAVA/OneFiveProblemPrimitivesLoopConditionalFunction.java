// Initiate a variable for every primitive. Initiate an int id count set to 0. Declare fn incrementCount that takes an int and if int gt 5 will loop the amount of int adding local adder + 1 each loop. Print all variables and run the int variable through incrementCount and print the return.

public class OneFiveProblemPrimitivesLoopConditionalFunction {

        final static int incrementCount(int num) {
            if (num > 5) {
                int adder = 3;
                int loops = num;

                while (loops > 0) {
                    num+= adder;
                    adder++;
                    loops--;
                }
            }
            return num;
        }

    public static void main(String[] args) {

        final int nint = 7;
        final double dbl = 32.32;
        final char chr = 'c';
        final String str = "Hello";
        final Boolean boo = false;




    System.out.println("nint: " + nint + " double: " + dbl + " chr: " + chr + " str: " + str + " boo: " + boo);

    System.out.println("incrementCount(nint): " + incrementCount(nint));

    }
}
