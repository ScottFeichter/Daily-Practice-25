// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.


public class ZeroSixProblemVariables {


    public static void main(String[] args){

        int myMutable = 4;
        final int MY_IMMUTABLE = 5;

        System.out.println("myMutable: " + myMutable + " MY_IMMUTABLE: " + MY_IMMUTABLE);

        myMutable += MY_IMMUTABLE;

        System.out.println("myMutable: " + myMutable + " MY_IMMUTABLE: " + MY_IMMUTABLE);

    }
}
