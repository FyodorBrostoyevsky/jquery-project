$(document).ready(function() {
  for(var i=0; i<16; i++) {
    var row = $("<tr></tr>");
    row.appendTo('#canvas');
    for(varj=0; j<16; j++) {
      var column = $("<td class='blox'></td>");
      column.appendTo('tr');
    };
  };

  $('.blox').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
});


// Columns decrease as rows go on. Figure it out
