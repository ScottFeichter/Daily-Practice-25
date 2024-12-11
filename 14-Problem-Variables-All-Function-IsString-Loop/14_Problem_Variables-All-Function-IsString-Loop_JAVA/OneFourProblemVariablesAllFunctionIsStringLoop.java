// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

// Modifers:
//  I. Access Modifiers - controls the access level
        // - classes:
                // public - any class can access it
                // none (default) - only classes in same package can access

        // - attributes, methods, constructors:
                // public - any class can access it
                // private - only accessible within the declared class
                // none (default) - only accessible within the same package
                // protected - accessible in the same package and subclasses

//  II. Non Access Modifiers - provide other functionality (aka optional specifiers?)
        // - classes:
                // final - cannot be inherited by other classes
                // abstract - cannot be used to create objects (must be inherited)

        // - attributes, methods:
                // final - cannot be overridden/modified
                // abstract - can only be used in the abstract class and only on methods
                // static - belongs to the class rather than the object
                // transient - skipped when serializing the object containing them
                // synchronized - methods can only be accessed by one thread at a time
                // volatile - value of an attribute is not cached thread-locally, and is always read from the "main memory"

// https://www.w3schools.com/java/java_modifiers.asp


// problem - how to create fn with arg of unknown type
// solution - generics are similar to c++ template T

// need side quest to better understand java quirks
// might refactor these problems without needing an arg of unknown type


public class OneFourProblemVariablesAllFunctionIsStringLoop{

    static final int num = 3;
    static final String str1 = "str1";
    static final String str2 = "str2";
    static final String str3 = "str3";
    static final boolean bools = false;
    static final char chars = 'c';
    static final float floats = 32.32f;

    static int count = 0;

    // public boolean isString(prim) {
    //     return (prim instanceof String);
    // }

    // public void incrementCount(prim) {
    //     if(isString(prim)) count++;
    // }

    // public void printType(prim) {
    //     System.out.println(prim.getClass().getName());
    // }







    public static void main(String[] args) {

        System.out.println(num +  str1 + str2 + str3 + bools + chars + floats + count);


        System.out.println(((Object)num).getClass().getName());
        System.out.println(((Object)str1).getClass().getName());
        System.out.println(((Object)str2).getClass().getName());
        System.out.println(((Object)str3).getClass().getName());
        System.out.println(((Object)bools).getClass().getName());
        System.out.println(((Object)chars).getClass().getName());
        System.out.println(((Object)floats).getClass().getName());
        System.out.println(((Object)count).getClass().getName());

        System.out.println("initial count: " + count);

        if(((Object)num).getClass().getName() == "java.lang.String") {
            count++;
        }


        if(((Object)str1).getClass().getName() == "java.lang.String") {
            count++;
        }

        if(((Object)str2).getClass().getName() == "java.lang.String") {
            count++;
        }

        if(((Object)str3).getClass().getName() == "java.lang.String") {
            count++;
        }

        if(((Object)bools).getClass().getName() == "java.lang.String") {
            count++;
        }

        if(((Object)chars).getClass().getName() == "java.lang.String") {
            count++;
        }

        if(((Object)floats).getClass().getName() == "java.lang.String") {
            count++;
        }



        System.out.println("final count: " + count);




    }

}
