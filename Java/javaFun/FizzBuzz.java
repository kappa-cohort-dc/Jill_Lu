public class FizzBuzz {

  public String fizzBuzz(int number) {      //fizzBuzz(int) == signature
    if (number % 15 == 0){
      return "FizzBuzzz";
    }
    else if (number % 3 == 0){
      return "Fizz";
    }
    else if (number % 5 == 0){
      return "Buzzz";
    }
    else if (number % 2 == 0){
      return "2";
    }
    else{
      return "sorry..";
    }
  }
}
