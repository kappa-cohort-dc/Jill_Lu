import java.util.*;

class PuzzleJavaTest{
  public static void main(String[] args) {
    PuzzleJava pj = new PuzzleJava();

    int[] newArr = {3,5,1,2,7,9,8,13,25,32};

    ArrayList<Integer> greaterThanTen = pj.greaterThanTen(newArr);
    System.out.println(greaterThanTen);

    ArrayList<String> shuffleNames =
    pj.shuffleNames();
    System.out.println(shuffleNames);

    // pj.isVowel();
  }


}
