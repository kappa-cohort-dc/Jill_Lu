function VehicleConstructor(name, wheels, passengers, speed){

  var self= this;
  var distance_travelled= 0
  function update_distance_travelled(){
    distance_travelled += self.speed;
    console.log(distance_travelled);
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  this.makeNoise = function(){
    console.log('Vehicle noise')
  }
  this.move = function(){
    update_distance_travelled();
    this.makeNoise();
    return this;
  }
  this.checkMiles= function(){
    console.log(distance_travelled);
    return this;
  }
}
var Bike = new VehicleConstructor('Bike', 2, 2, 10);
// console.log(Bike);
// Bike.makeNoise();
// Bike.makeNoise = function(){
//   console.log('ring ring');
// }
// Bike.makeNoise();
Bike.move().move().move().checkMiles();

// var Sedan = new VehicleConstructor('Sedan', 4, 5, 50);
// // console.log(Sedan);
// // Sedan.makeNoise = function(){
// //   console.log('Honk Honk!');
// // }
// // Sedan.makeNoise();
// Sedan.move();
// var Bus = new VehicleConstructor('Bus', 8, 50, 10);
// //   console.log(Bus);
// // Bus.addpassengers = function(passengers){
// //   Bus.passengers += passengers;
// // }
// // console.log(Bus.passengers);
// // Bus.addpassengers(10);
// // console.log(Bus.passengers);
// Bus.move();
