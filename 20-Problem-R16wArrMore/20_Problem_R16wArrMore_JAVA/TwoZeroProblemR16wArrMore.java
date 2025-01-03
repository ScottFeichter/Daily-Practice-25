// Repeat problem 19 but include an array of mixed type if possible, and an empty array if possible

// still printing references

import java.io.*;
import java.util.*;
import java.util.ArrayList;

public class TwoZeroProblemR16wArrMore{

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


    public static void main(String[] args){

        final int NINT = (1 + (int)(Math.random() * ((10 - 1 + 1))));
        final double DBL = 32.32;
        final char CHR = 'c';
        final String STR = "String";
        final boolean BOO = true;

        int undv; // can do this but can't prnt until initialize

        int[] nums = {0, 1, 2, 3};
        double[] dubs = {11.11, 22.22, 33.33, 44.44};
        char[] chars = {'a', 'b', 'c', 'd'};
        String[] stirs = {"This", "is", "string", "array"};
        boolean[] boos = {true, false, false, true};

        // create an array of mixed types suggestion from Q:
        Object[] mixta = {NINT, DBL, CHR, STR, BOO, nums, dubs, chars, stirs, boos};

        // suggestion from chat gpt:

        // Object array can have mixed types
        Object[] mixedArray = new Object[4];
        mixedArray[0] = 10;          // Integer
        mixedArray[1] = "Hello";     // String
        mixedArray[2] = 3.14;        // Double
        mixedArray[3] = true;        // Boolean


        // Retrieving elements requires casting
        int numer = (int) mixedArray[0];
        String strer = (String) mixedArray[1];


        // ArrayList can have mixed types
        ArrayList<Object> mixedList = new ArrayList<>();
        mixedList.add(10);          // Integer
        mixedList.add("Hello");     // String
        mixedList.add(3.14);        // Double
        mixedList.add(true);        // Boolean


        // Retrieving elements requires casting
        int numb = (int) mixedList.get(0);
        String stri = (String) mixedList.get(1);

        // empty array
        int[] unda; // can do this but can't prnt until initialize


        System.out.println("NINT: " + NINT + " DOUBLE: " + DBL + " CHR: " + CHR + "STR: " + STR + " BOO: " + BOO);

        System.out.println("nums: " + nums + " dubs: " + dubs + " chars: " + chars + " stirs: " + stirs + " boos: " + boos + " mixta " + mixta);

        System.out.println("incrementNint(NINT): " + incrementNint(NINT));


    }
}
