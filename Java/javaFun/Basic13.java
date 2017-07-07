import java.util.ArrayList;

class Basic13{
  public void print1To255(){
    for(int i = 1; i < 256; i++){
      System.out.println(i);
    }
  }
  public void printOdd1To255(){
    for(int i= 1; i < 255; i++){
      if(i % 2 == 1){
        System.out.println(i);
      }
    }
  }
  public void printSum(){
    int sum = 0;
    for(int i= 0; i < 256; i++){
      sum += i;
      System.out.println(sum);
    }
  }
 public void iterateArray(int[] anArray){
   for(int i= 0; i< anArray.length; i++){
     System.out.println(anArray[i]);
   }
 }
 public void max(int[] arr){
   int max = 0;
   for( int i= 0; i<arr.length; i++){
     if(max < arr[i]){
       max= arr[i];
     }
     System.out.println(max);
   }
 }
 public void min(int[] arr){
   int min = 0;
   for(int i= 0; i< arr.length; i++){
     if(min > arr[i]){
       min = arr[i];
     }
     System.out.println(min);
   }
 }
 public void avg(int[] arr){
   int sum = 0;
   for(int i = 0; i< arr.length; i++){
     sum += arr[i];
   }
   System.out.println(sum / arr.length);
 }

 public ArrayList<Integer> oddArrays(){
   ArrayList<Integer> arr = new ArrayList<>();
   for(int i = 0; i <= 255; i++){
     if(i % 2 == 1){
       arr.add(i);

     }
   }
   return arr;
 }
 public void greaterThanY(int[] arr, int y){
   int count = 0;
   for(int i = 0; i < arr.length; i++){
     if(arr[i] > y){
       count ++;
     }
   }
   System.out.println(count);
  //  ArrayList<Integer> arr = new ArrayList<>();
  //  for(int i = 0; i < arr.length; i++){
  //    if(arr[i]>y){
  //      arr.add(i);
  //    }
  //  }
  //  return arr.size();
 }
 public ArrayList<Integer> sqValues(int[] arr){
   ArrayList<Integer> array = new ArrayList<>();
   for(int i= 0; i < arr.length-1; i++){
     array.add(arr[i]*arr[i]);
   }
   return array;
 }

 public ArrayList<Integer> removeNeg(int[] arr){
   ArrayList<Integer> array = new ArrayList<>();
   for(int i = 0; i < arr.length; i++){
     if(arr[i] <0 ){
       array.add(0);
     }
     else{
       array.add(arr[i]);
     }
   }
   return array;
 }

 public ArrayList<Integer> shiftVal(int[] arr){
   ArrayList<Integer> array = new ArrayList<>();
   for (int i = 1; i < arr.length; i++){
     array.add(arr[i]);
   }
   return array;
 }

}
