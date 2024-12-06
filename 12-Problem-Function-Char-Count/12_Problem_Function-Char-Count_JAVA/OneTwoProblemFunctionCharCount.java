// Create an int mut variable identified as count and set it to 0. Create a bool mut var id moreThanTen set to false. Create an int func num arg that loops to count chars in a string called length. Create 3 str immut vars. Pass them through to count length and pass the result to moreThanTen. Print the result for each str immut.


// having a pass by reference problem!!!! may need to side quest...

public class OneTwoProblemFunctionCharCount {

    public static int count = 0;
    public static boolean isMoreThanTen = false;

    static int charCount(String str) {


        for (int i = str.length(); i > 0; i++)  {
            OneTwoProblemFunctionCharCount.count++;
        }

        int localCount = OneTwoProblemFunctionCharCount.count;
        System.out.println("count: " + count + " One..count: " + OneTwoProblemFunctionCharCount.count);
        OneTwoProblemFunctionCharCount.count = 0;
        return localCount;

    }

    static boolean isMoreThanTen(int thisCount) {
        return (thisCount > 10);
    }


    public static void main(String[] args) {

        String str1 = "Tomorrow";
        String str2 = "pandemonium";
        String str3 = "The";

        System.out.println("str1: letter count =  " + charCount(str1) + " more than 10 =  " + isMoreThanTen(charCount(str1)));

        System.out.println("str2: letter count =  " + charCount(str2) + " more than 10 =  " + isMoreThanTen(charCount(str2)));

        System.out.println("str3: letter count =  " + charCount(str3) + " more than 10 =  " + isMoreThanTen(charCount(str3)));

    }
}
