$(function() {
  $("#submit").on("click",function() {
    event.preventDefault()
    var requestData = $("#input").val();
    console.log(requestData)
    $('#results').html(requestData);
  });
});
