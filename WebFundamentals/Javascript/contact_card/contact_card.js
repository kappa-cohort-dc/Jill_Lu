$(document).ready(function(){
  // alert('its working!');

  $(document).on('click', '.contactCard', function(){
  $(this).children().toggle();
  });

      $('button').click(function(){
        var first = $('.first').val();
        var last = $('.last').val();
        var text = $('.description').val();
        // console.log(first,last,text);
        $('#right-side').append(`<div class='contactCard'><h1>${first}, ${last}</h1><h4>Click for description</h4><p hidden>${text}</p></div>`);
          $('#right').append(`<p id='contactCard'>${text}</p>`)
      });


});
