// // Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
//
function sumXY(x,y){
  var sum = 0
  for(i=x; i<=y ; i++ ){
    sum += i
  }
  return sum;
  console.log(sum);
}
// // sumXY(1,500);
//
// // Write a loop that will go through an array, find the minimum value, and then return it
//
function arrayMin(arr){
  var min = arr[0];
  for(i=0; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
    }
  }
  return min;
  console.log(min);
}
// // minArray([1, 5, 90, 25, -3, 0]);
//
// // Write a loop that will go through an array, find the average of all of the values, and then return it
//
function arrayAvg(arr){
  var sum = arr[0];
  for(i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return (sum/arr.length);
  console.log(sum/arr.length);
}
//
// // arrayAvg([1, 5, 90, 25, -3, 0]);

var person = {
  name : "Jill",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
    return person;
  },
  say_something : function(){
    console.log(`${person.name} says: "i'm cool"`);
    return person;
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  }
}
person.walk().crawl()
