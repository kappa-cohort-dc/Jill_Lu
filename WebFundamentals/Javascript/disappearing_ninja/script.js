$(document).ready(function(){
    // alert('its working!');

    $('img').on('click', function(){
      $(this).hide('slow');
    });

    $('button').click(function(){
        $('img').show();
    });

    $('#restore').click(function(){
        $('#pandas').show('<img src="ninjapanda.jpg" alt="ninja">');
    });

  })
