var hour = 8;
var minute = 50;
var period = 'AM';

var hour = 7;
var minute = 15;
var period = 'PM'



  function time(HOUR,MINUTE,PERIOD){

  if( MINUTE > 30){
  	MINUTE = "its almost";
  	HOUR += 1;
  }
  else( MINUTE = "It's just after");

  if(PERIOD == "AM"){
  	PERIOD = "in the morning";
  }
  else(PERIOD = "in the evening");

  console.log(MINUTE, HOUR, PERIOD);
}

  time(7,15,"PM");
