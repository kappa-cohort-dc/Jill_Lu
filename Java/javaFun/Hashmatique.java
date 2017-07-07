import java.util.HashMap;

class Hashmatique{
  public static void main(String[] args){
    HashMap <String, String> trackList = new HashMap<>();
    trackList.put("Song 1", "Cause all of me...loves all of you");
    trackList.put("Song 2", "I want something just like this");
    trackList.put("Song 3", "I knew you were trouble");
    trackList.put("Song 4", "Oops, I did it again");

    String song = trackList.get("Song1");

    for(String key : trackList.keySet())
    {
      System.out.println(key + " : " + trackList.get(key));
    }
  }
}
