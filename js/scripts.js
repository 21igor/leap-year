// business logic
var leapYear = function(year) {

  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    // alert (Math.abs(year));
    var result = leapYear(year);

    if (!year){
      alert ("Year can not be blank.")
    } else {
      if (year < 0){
        $(".year").text(Math.abs(year) + " BC");
      }else {
        $(".year").text(year + " AD");
      }

      if (!result) {                 // same as writing if (result === false)
        $(".not").text("not");
      } else {
        $(".not").text("");
      }
      $("#result").show();
    }
  });
});
