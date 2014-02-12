$(function() {
  $("#submit").on("click",function() {
    event.preventDefault()
    var requestData = {num:$("#input").val()};
    console.log(requestData)
    $.get( '/test',requestData, function(data) {
      $('#results').html(data);
    });
  });
});
