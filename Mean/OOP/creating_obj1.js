function VehicleConstructor(name, wheels, passengers){
  var vehicle = {}
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function(){
    console.log('Vehicle noise')
  }

  return vehicle;
}
var Bike = VehicleConstructor('Bike', 2, 2);
// console.log(Bike);
// Bike.makeNoise();
// Bike.makeNoise = function(){
//   console.log('ring ring')
// }
// Bike.makeNoise();


var Sedan = VehicleConstructor('Sedan', 4, 6);
// console.log(Sedan);
// Sedan.makeNoise = function(){
//   console.log('Honk Honk!')
// }
// Sedan.makeNoise();
var Bus = VehicleConstructor('Bus', 8, 50);
  console.log(Bus);
  
