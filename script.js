$(document).ready(function() {
  for(var i=0; i<16; i++) {
    for(var j=0; j<16; j++) {
      var unit = $('<div class="blox"></div>');
      unit.appendTo('#container');
    }
  }

  $('.blox').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
});
