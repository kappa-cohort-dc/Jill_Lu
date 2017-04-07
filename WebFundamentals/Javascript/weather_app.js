$(document).ready(function() {
  alert('working!')
    $('form').submit(function() {
        // your code here (build up your url)
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=6c6ab7b525e2b71ca8a91dac04e260e8", function(res){
		        $('.name').html(res.name)
		         $('.weather').html('<h1>Temperature is</h1>'+ "<p>" + res.main.temp + " °F" + "</p>");
		            console.log(res);
              }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
