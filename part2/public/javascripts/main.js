$(function() {
  $("#form").submit(function() {
  	var requestData = {search: $("#input").val()};
    console.log(requestData)
    $.get("/gotcha", requestData, function(data) {
      $('#results').html(data);
    });
    return false;
  });
});
