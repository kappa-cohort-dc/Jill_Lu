import java.util.*;

class PuzzleJava{

public ArrayList<Integer> greaterThanTen(int[] array){
   int sum =0;
   ArrayList<Integer> arr = new ArrayList<>();
   for(int i = 0; i < array.length; i++){
     sum += array[i];
     if(array[i]>10){
       arr.add(array[i]);
     }
   }
   System.out.println(sum);
   return  arr;
 }

 public ArrayList<String> shuffleNames(){

  ArrayList<String> newArr = new ArrayList<>();
  ArrayList<String> arr = new ArrayList<>();
  arr.add("Nancy");
  arr.add("Jinichi");
  arr.add("Fujibayashi");
  arr.add("Momochi");
  arr.add("Ishikawa");

  Collections.shuffle(arr);

  for(int i = 0; i < arr.size(); i++){
    if(arr.get(i).length() > 5 ){
      newArr.add(arr.get(i));

    }
  }

  return newArr;
}
  // public static void isVowel()
  // {
  //     String[] alphabet = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
  //     alphabet = shuffleArray(alphabet);
  //
  //     System.out.println(alphabet[0]);
  //     System.out.println(alphabet[alphabet.length - 1 ]);
  //     String[] vowels = {"a", "e", "i", "o", "u"};
  //     if(Arrays.asList(vowels).contains(alphabet[0]))
  //     {
  //       System.out.println("VOWEL!");
  //     }
  // }
}
