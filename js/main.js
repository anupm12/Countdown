var targetDate = new Date(
  window.prompt("Date Format - 31 dec 2020", "12 jan 2021")
).getTime();

function counter() {
  var dateToday = new Date().getTime();

  var diff = (targetDate - dateToday) / 1000;

  var days = Math.floor(diff / 3600 / 24);

  var hours = Math.floor(diff / 3600) % 24;

  var minutes = Math.floor(diff / 60) % 60;

  var seconds = Math.floor(1 + (diff % 60));

  // console.log(days, hours, minutes, seconds);

  document.getElementById("day").innerHTML = formatTime(days);
  document.getElementById("hour").innerHTML = formatTime(hours);
  document.getElementById("minute").innerHTML = formatTime(minutes);
  document.getElementById("second").innerHTML = formatTime(seconds);
}

function formatTime(x) {
  return x < 10 ? "0" + x : x;
}

counter();
setInterval(counter, 1000);
