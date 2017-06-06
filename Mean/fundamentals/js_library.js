
var _ = {
   map: function(array, callback) {   //'callback' is a variable name, call it anything
     for(var i=0; i<array.length; i++){
       array[i] = callback(array[i]);
     }
     return array;
   },

   reduce: function(array, callback, memo) {
     var j= 0;
     if(!memo){
       memo = array[0];
       j = 1;
     }
     for(var x= 0; x<array.length; x++){
       memo= callback(memo, array[x]);
     }
     return memo;
   },

   find: function(array, callback) {
     for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
  },

   filter: function(array, callback) {
     var tempArray =[];
     for (var i = 0; i < array.length; i++) {
       if (callback(array[i])){
         tempArray.push(array[i]);
       }
     }
     return tempArray;
   },

   reject: function(array, callback) {
     var tempArray =[];
     for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    return tempArray;
   }
 }

var array = [3,4,5];
// console.log(_.map(array, function callback(x){return x * 5;}));
// console.log(_.reduce(array, function callback(x, memo){return x + memo;}));
// console.log(_.find(array, function callback(num) {return num ===15;}));
// console.log(_.filter(array, function callback(num) {return num >=20;}));
console.log(_.reject(array, function callback(num) {return num % 2 ==0;}));
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
