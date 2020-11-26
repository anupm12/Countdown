var targetDate = new Date("27 dec 2020").getTime();

function counter() {
  var dateToday = new Date().getTime();

  var diff = targetDate - dateToday;

  var days = Math.floor(diff / (1000 * 24 * 60 * 60));
  days = ("0" + days).slice(-2);

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = ("0" + hours).slice(-2);

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  minutes = ("0" + minutes).slice(-2);

  var seconds = Math.floor(1 + (diff % (1000 * 60)) / 1000);
  seconds = ("0" + seconds).slice(-2);

  // console.log(days, hours, minutes, seconds);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}
counter();
setInterval(counter, 1000);
