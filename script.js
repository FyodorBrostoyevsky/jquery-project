$(document).ready(function() {
  for(var i=0; i<16; i++) {
    var row = $("<tr></tr>");
    row.appendTo('#canvas');
    var column = $("<td class='blox'></td>");
    column.appendTo('tr');
  };

  $('.blox').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
});
