$(document).ready(function() {
  // Create a table with variable dimensions
  function sketchup(x) {
    for(var i=0; i<x; i++) {
      var row = $("<tr class='row'></tr>");
      row.appendTo('#canvas');
    };

    for(var j=0; j<x; j++) {
      var column = $("<td class='blox'></td>");
      column.appendTo('tr');
    };
  };


sketchup(70);

  $('#resize').submit(function() {
    var size = $('form').val();
    sketchup(size);
  })

  $('.blox').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
  $('#reset').on('click', function() {
    $('.blox').removeClass('highlight');
  });
});



// Should my table cells have divs within them?
// Must remove gaps between data rows
// How to scale dynamically?
