$(document).ready(function() {
  for(var i=0; i<16; i++) {
    var row = $("<tr class='row'></tr>");
    row.appendTo('#canvas');
  };

  for(var j=0; j<16; j++) {
    var column = $("<td class='blox'></td>");
    column.appendTo('tr');

  };

  $('.blox').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
});


// Should my table cells have divs within them?
// Must remove gaps between data rows
// How to scale dynamically?
