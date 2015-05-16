$(document).ready( function() {
  var $max_sit_input = $("input[name='max_sit_time']");
  var $min_walk_input = $("input[name='min_walk_time']");
  var $current_sit_span = $("#current_sit_time");


  $max_sit_input.change( function() {
    console.log( 'max sit time changed ');
  });

  $min_walk_input.change( function() {
    console.log( 'min walk time change ');
  })
})
