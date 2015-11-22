var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
}

/* main */
var main = function() {
  
  // pending and completed
  

  // add task to list
  $('form').submit(function() {
  var text = $('#todo').val();
  if (text !== "") {
    var html = template(text);
    $(html).appendTo('.list');
    $('#todo').val("");
  }  
    return false;  
  });
  
  // star item
  $('body').on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
  });
  
  $('body').on('click', '.glyphicon-remove', function() {
    $(this).parent().remove();
  });
};

$(document).ready(main);