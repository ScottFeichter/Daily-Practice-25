// Repeat problem Sixten but this time also create an array of nums, an array of chars, an array of strings, and an array of booleans


// arrays are printing addresses

import java.io.*;
import java.util.*;

public class OneNineProblemRepeatSixteenAndDefineArray {

    public static int incrementNint(int num) {
        if(num > 5) {
            int adder = (1 + (int)(Math.random() * ((10 - 1) + 1)));
            int loops = (1 + (int)(Math.random() * ((10 - 1) + 1)));

            while(loops > 0) {
                num+= adder;
                adder+=1;
                loops-=1;
            }
        }
        return num;
    }


    public static void main(String[] args) {

        final int NINT = (1 + (int)(Math.random() * ((10 - 1) + 1)));
        final double DBL = 32.32;
        final char CHR = 'c';
        final String STR = "String";
        final boolean BOO = true;

        int[] nums = {0, 1, 2, 3};
        double[] dubs = {11.11, 22.22, 33.33, 44.44};
        char[] chars = {'a', 'b', 'c', 'd'};
        String[] stirs = {"Hello", "World", "I", "am", "Scott"};
        boolean[] boos = {true, false, false, true};

        System.out.println("NINT: " + NINT + " DOUBLE: " + DBL + " CHR: " + CHR + "STR: " + STR + " BOO: " + BOO);

        System.out.println("nums: " + nums + " dubs: " + dubs + " chars: " + chars + " stirs: " + stirs + " boos: " + boos);

        System.out.println("incrementNint(NINT): " + incrementNint(NINT));

    }
}
