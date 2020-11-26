var targetDate = new Date(window.prompt()).getTime();

function counter() {
  var dateToday = new Date().getTime();

  var diff = (targetDate - dateToday) / 1000;

  var days = Math.floor(diff / 3600 / 24);

  var hours = Math.floor(diff / 3600) % 24;

  var minutes = Math.floor(diff / 60) % 60;

  var seconds = Math.floor(1 + (diff % 60));

  // console.log(days, hours, minutes, seconds);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}
counter();
setInterval(counter, 1000);
