class StringManipulator{
  public String trimAndConcat(String string1, String string2){
    return string1.trim()+ string2.trim();
  }
  public String getIndexOrNullz(String string1, char a){
    // char a = string1.indexOf(a);
    // return a;
    return String.valueOf(string1.indexOf(a));
  }
  public String getIndexOrNull(String string1, String string2){
    return String.valueOf(string1.indexOf(string2));
    // return string3;
    // return string1.indexOf(string2);
  }
  public String concatSubstring(String string1, int int1, int int2, String string2){
    String string4 = string1.charAt(int1) + string2;
    return string4;
    // return string1.charAt(int1)+ string2;
  }
}
