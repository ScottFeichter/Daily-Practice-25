// Do everything in problem 15 but make the int generated from randome between 1 - 10

import java.io.*;
import java.util.*;



public class OneSixProblemRandomFifteen {

    public static int incrementNint(int num){
        if(num > 5) {
            int adder = (1 + (int)(Math.random() * ((10 - 1) + 1)));
            int loops = (1 + (int)(Math.random() * ((10 - 1) + 1)));

            System.out.println("adder: " + adder);
            System.out.println("loops: " + loops);

            while (loops > 0) {
                num+= adder;
                adder+= 1;
                loops-= 1;
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
