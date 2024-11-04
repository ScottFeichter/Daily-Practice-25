// Create a mutable variable and an immutable variable and print each in one log.  Add the immutable variable to the mutable variable. Again print both in a new log.

public class ZeroFiveProblemVariables {
  public static void main(String[] args) {
    int mutable = 5;
    final int immutable = 6;

    System.out.println("mutable: " + mutable + " immutable: " + immutable);

    mutable += immutable;

    System.out.println("mutable: " + mutable + " immutable: " + immutable);

  }

}
