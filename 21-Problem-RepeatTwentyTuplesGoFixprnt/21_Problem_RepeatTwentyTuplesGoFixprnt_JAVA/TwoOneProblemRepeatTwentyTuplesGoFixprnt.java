// Repeat problem 20 - make the mixed arrays tuples (they already are), fix the printing by reference, and add the Go language

// still printing references

import java.io.*;
import java.util.*;
import java.util.ArrayList;
import org.javatuples.Quartet; // this requires a download of the javatuples jar file via maven...don't feel like digging in to this

public class TwoOneProblemRepeatTwentyTuplesGoFixprnt{

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


        // Java has a library for tuples that can be used for similar functionality and it looks like this:

        // Create a tuple with 4 elements of different types
        Quartet<Integer, Character, String, Boolean> mixtuple = Quartet.with(0, 'c', "string", false);

        // To access elements, you can use:
        Integer first = mixtuple.getValue0();   // gets 0
        Character second = mixtuple.getValue1(); // gets 'c'
        String third = mixtuple.getValue2();    // gets "string"
        Boolean fourth = mixtuple.getValue3();   // gets false

        // To print the tuple
        System.out.println(mixtuple);  // Will print: [0, c, string, false]


        System.out.println("NINT: " + NINT + " DOUBLE: " + DBL + " CHR: " + CHR + "STR: " + STR + " BOO: " + BOO);

        System.out.println("nums: " + nums + " dubs: " + dubs + " chars: " + chars + " stirs: " + stirs + " boos: " + boos + " mixta " + mixta + " mixedArray: " + mixedArray + " mixtuple: ", mixtuple);

        System.out.println("incrementNint(NINT): " + incrementNint(NINT));


    }
}
