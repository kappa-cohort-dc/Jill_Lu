class StringManipulatorTest{
  public static void main(String[] args){
    StringManipulator sT = new StringManipulator();
    System.out.println(sT.trimAndConcat("Hello", "World"));

    System.out.println(sT.getIndexOrNullz("Hello", 'e'));

    System.out.println(sT.getIndexOrNull("World", "or"));

    System.out.println(sT.concatSubstring("Hello", 1, 2, "world"));
  }
}
