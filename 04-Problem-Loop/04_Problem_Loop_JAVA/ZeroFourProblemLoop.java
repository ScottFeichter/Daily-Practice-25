// create a mutable variable sum = 1 and print it then create a basic for loop and increment sum 9 times to total 10 then print sum

public class ZeroFourProblemLoop {

    public static void main (String[]  args) {
        int sum = 1;
        System.out.println(sum);

        for(int i = 0; i < 9; i++) { // a for loop is slightly redundant - while loop would suffice
            sum++;
        }

        System.out.println(sum);


    }

}
