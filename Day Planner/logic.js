$(document).ready(function() {
  //listner for save button clicks
  $(".btn").on("click", function() {
    var value = $(this)
      .siblings(".occurrence")
      .val();
    var time = $(this)
      .parent()
      .attr("id");

    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    var currentHour = moment().hours();

    $(".timeBlock").each(function() {
      var blockHour = parseInt(
        $(this)
          .attr("id")
          .split("-")[1]
      );

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  var interval = setInterval(hourUpdater, 15000);

  $("#hour-9 .occurrence").val(localStorage.getItem("hour-9"));
  $("#hour-10 .occurrence").val(localStorage.getItem("hour-10"));
  $("#hour-11 .occurrence").val(localStorage.getItem("hour-11"));
  $("#hour-12 .occurrence").val(localStorage.getItem("hour-12"));
  $("#hour-13 .occurrence").val(localStorage.getItem("hour-13"));
  $("#hour-14 .occurrence").val(localStorage.getItem("hour-14"));
  $("#hour-15 .occurrence").val(localStorage.getItem("hour-15"));
  $("#hour-16 .occurrence").val(localStorage.getItem("hour-14"));
  $("#hour-17 .occurrence").val(localStorage.getItem("hour-17"));

  function curtime() {
    var now = moment().format("MMMM Do YYYY, h:mm:ss a");
    var hour = moment().format("HH");
    for (var i = 9; i <= 20; i++) {
      var g = "#hour-" + i;
      if (i < hour) {
        $(g).attr("style", "background: gray");
      } else if (i == hour) {
        $(g).attr("style", "background: red");
      } else {
        $(g).attr("style", "background: green");
      }
    }
    $(".current-time").text(now);
  }
  setInterval(curtime, 1000);
});
