$(document).ready(function(){
  // alert('ready!');

  $('.button').click(function(){
    var first = $('.first').val();
    var last = $('.last').val();
    var email = $('.email').val();
    var contact = $('.phone').val();

    $('table').append('<tr><td>'+first+'</td><td>'+last+'</td><td>'+email+'</td><td>'+contact+'</td></tr>');

  });
});
