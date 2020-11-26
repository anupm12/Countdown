var targetDate = new Date("27 nov 2020").getTime();

function countdown() {
  var dateToday = new Date().getTime();

  var diff = targetDate - dateToday;

  var days = Math.floor(diff / (1000 * 24 * 60 * 60));

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);
}
countdown();
setInterval(countdown, 1000);
