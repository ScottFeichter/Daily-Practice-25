// Repeat problem 16 again to work rote memory of basic syntax.
import java.io.*;
import java.util.*;


public class OneEightProblemRepeatSixteenAgain {

    public static int incrementNint(int num) {
        if (num > 5) {
            int adder = (1 + (int)(Math.random() * ((10 - 1) + 1)));
            int loops = (1 + (int)(Math.random() * ((10 - 1) + 1)));

            while (loops > 0) {
                num+= adder;
                adder+=1;
                loops-=1;
            }
        }
        return num;
    }


    public static void main(String[] args) {

        final int nint = (1 + (int)(Math.random() * ((10 - 1) + 1)));
        final double dbl = 32.32;
        final char chr = 'c';
        final String str = "hello";
        final boolean boo = true;


        System.out.println("nint: " + nint + " double: " + dbl + " chr: " + chr + " str: " + str + " boo: " + boo);

        System.out.println("incrementNint(nint): " + incrementNint(nint));


    }
}
