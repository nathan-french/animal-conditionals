$(document).ready(function() {

  $('.radio').change(function(){
    var animal = $("input:radio[name=selector]:checked").val();
    $(".wiki").hide();
    if (animal === "snakeBtn") {
      $(".snake").show();
    } else if (animal === "dogBtn") {
      $(".dog").show();
    } else if (animal === "catBtn") {
      $(".cat").show();
    } else if (animal === "fishBtn") {
      $(".fish").show();
    }
  });
});
