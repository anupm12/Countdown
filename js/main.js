var targetDate = 0;

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
  if (localStorage.getItem("date")) {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("forget").style.display = "inline";
    targetDate = localStorage.getItem("date");
    counter();
    setInterval(counter, 1000);
  } else {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("forget").style.display = "none";
  }
}

document.getElementById("submitDate").onclick = function () {
  let inputDate = document.querySelector("#dateVal").value;
  targetDate = new Date(convertDate(inputDate)).getTime();
  localStorage.setItem("date", targetDate);
  startHere();
};

document.getElementById("forget").onclick = function () {
  localStorage.removeItem("date");
  window.location.reload();
  startHere();
};

window.onload = function () {
  startHere();
};
