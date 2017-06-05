function personConstructor(){
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
}


function ninjaConstructor(name, cohort, belt){
  var ninja ={}
  var belts =['yellow', 'red', 'black']
  ninja.name = name
  ninja.cohort = cohort
  ninja.belt = 0
  // all ninjas starts with yellow belt and then levels up
}
