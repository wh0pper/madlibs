$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var inputsArray = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    inputsArray.forEach(function(input) {
      var userInput = $("#" + input).val();
      $("." + input).text(userInput);
    });

    $("#story").show();
  });
});
