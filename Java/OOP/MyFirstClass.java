// class MyFirstClass{
//   Vehicle sedan;    //Declaring new variable name sedan of type Vehicle
//   sedan = new Vehicle("Civic");  //Instantiating the object using the new keyword, and saving it into the sedan variable
//   Vehicle coupe = new Vehicle("Buggy"); //Declaring, initializng ans aving object on same line
//
// }



// Calling static methods from inside its own class
public class MyFirstClass{
  public static void main(String[] args){
    getName();
  }
  static void getName(){
    System.out.println("My name is Dojo");
  }
}
