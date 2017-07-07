import java.lang.Math;
class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
      double hypotenuse = legA * legA + legB * legB;
      return Math.sqrt(hypotenuse);
    }
  }
