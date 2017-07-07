import java.util.ArrayList;

class Basic13Test{
  public static void main(String[] args) {
    Basic13 jB = new Basic13();
    // jB.print1To255();
    // jB.printOdd1To255();
    // jB.printSum();
    int[] newArr;
    newArr = new int[6];
    newArr [0] = 1;
    newArr [1] = 5;
    newArr [2] = 10;
    newArr [3] = 7;
    newArr [4] = -2;
    jB.iterateArray(newArr);
    jB.max(newArr);
    jB.min(newArr);
    jB.avg(newArr);
    jB.greaterThanY(newArr, 5);

    ArrayList<Integer> oddArrays = jB.oddArrays();
    System.out.println(oddArrays.toString());

    ArrayList<Integer> sqValues= jB.sqValues(newArr);
    System.out.println(sqValues.toString());
    ArrayList<Integer> removeNeg = jB.removeNeg(newArr);
    System.out.println(removeNeg.toString());

    ArrayList<Integer> shiftVal = jB.shiftVal(newArr);
    System.out.println(shiftVal.toString());

  }
}
