var targetDate = 0;

// localStorage.setItem("date", targetDate);
// console.log(localStorage.getItem("date"));

function convertDate(date) {
  let x = date;
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let yy = x.slice(0, 4);
  let mmIndex = x.slice(5, 7);
  let mm = monthNames[mmIndex - 1];
  let dd = x.slice(8, 10);

  return dd + " " + mm + " " + yy;
}

function formatTime(x) {
  return x < 10 ? "0" + x : x;
}

function counter() {
  var dateToday = new Date().getTime();

  var diff = (targetDate - dateToday) / 1000;

  var days = Math.floor(diff / 3600 / 24);
  var hours = Math.floor(diff / 3600) % 24;
  var minutes = Math.floor(diff / 60) % 60;
  var seconds = Math.floor(1 + (diff % 60));

  document.getElementById("day").innerHTML = formatTime(days);
  document.getElementById("hour").innerHTML = formatTime(hours);
  document.getElementById("minute").innerHTML = formatTime(minutes);
  document.getElementById("second").innerHTML = formatTime(seconds);
}

function startHere() {
  let inputDate = document.querySelector("#dateVal").value;
  targetDate = new Date(convertDate(inputDate)).getTime();
  console.log(targetDate);
  counter();
  setInterval(counter, 1000);
}

document.getElementById("submitDate").onclick = function () {
  startHere();
};
