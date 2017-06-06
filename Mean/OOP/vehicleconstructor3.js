function VehicleConstructor(name, wheels, passengers, speed){

  var self= this;
  var distance_travelled= 0
  VehicleConstructor.prototype.update_distance_travelled= function(){
    distance_travelled += self.speed;
    console.log(distance_travelled);
    return this;
  }
  var chars = '0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ';
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.vin = vinNum();

  function vinNum(){
    var vin='';
    for(var i=0; i<17; i+=1){
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

  VehicleConstructor.prototype.makeNoise = function(){
    var noise= 'beep beep!!'
    console.log(noise)
    return this;
  }
  VehicleConstructor.prototype.move = function(){
    this.update_distance_travelled();
    return this;
  }
  VehicleConstructor.prototype.checkMiles= function(){
    console.log(distance_travelled);
    return this;
  }
}
var Bike = new VehicleConstructor('Bike', 2, 2, 10);
console.log(Bike);
Bike.makeNoise();
// Bike.move().checkMiles();

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
