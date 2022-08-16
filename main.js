var $ = function (id) {
  return document.getElementById(id);
};
var time;
var millisconds = 0;
var mm = 0,
  ss = 0,
  mm = 0;
var unit = -30,
  unt2 = 30;
var rank = 0,
  count = 0;
var arr = [];
function Start_time() {
  Time();
  $("start").style.display = "none";
  $("after-start").style.display = "flex";
}
function Time() {
  time = setInterval(function () {
    millisconds++;
    ml = millisconds % 100;
    var countsecond = Math.floor(millisconds / 100);
    ss = countsecond % 60;
    mm = Math.floor(countsecond / 60);
    if (mm.toString().length < 2) {
      $("minute").innerText = "0" + mm;
    } else {
      $("minute").innerText = mm;
    }
    if (ss.toString().length < 2) {
      $("second").innerText = "0" + ss;
    } else {
      $("second").innerText = ss;
    }
    if (ml.toString().length < 2) {
      $("millisecond").innerText = "0" + ml;
    } else {
      $("millisecond").innerText = ml;
    }
  }, 10);
}
function Stop() {
  clearInterval(time);
  $("after-stop").style.display = "flex";
  $("after-start").style.display = "none";
}
function Resume() {
  Time();
  $("after-stop").style.display = "none";
  $("after-start").style.display = "flex";
}
function Reset() {
  $("after-stop").style.display = "none";
  $("start").style.display = "block";
  clearInterval(time);
  millisconds = 0;
  $("minute").innerText = "00";
  $("second").innerText = "00";
  $("millisecond").innerText = "00";
  $("clock").style.height = "80vh";
  DownClock();
  count = 0;
  rank = 0;
  $("lap").style.display = "none";
  $("lap").innerHTML = '<div id="lap" class="lap"></div>';
}
function Lap() {
  UpClock();
  $("lap").style.display = "block";
  rank++;
  var x = document.createElement("div");
  $("lap").appendChild(x);

  x.innerHTML = '<div id="lap-item" class="lap__item">';
  var y = document.createElement("div");
  $("lap-item").appendChild(y);

  if (mm.toString().length < 2) {
    mm = "0" + mm;
  }
  if (ss.toString().length < 2) {
    ss = "0" + ss;
  }
  if (ml.toString().length < 2) {
    ml = "0" + ml;
  }
  arr[rank] = millisconds;
  ml2 = (arr[rank] - arr[rank - 1]) % 100;
  var countsecond2 = Math.floor((arr[rank] - arr[rank - 1]) / 100);
  ss2 = countsecond2 % 60;
  mm2 = Math.floor(countsecond2 / 60);
  if (mm2.toString().length < 2) {
    mm2 = "0" + mm2;
  }
  if (ss2.toString().length < 2) {
    ss2 = "0" + ss2;
  }
  if (ml2.toString().length < 2) {
    ml2 = "0" + ml2;
  }
  if (rank == 1) {
    mm2 = "00";
    ss2 = "00";
    ml2 = "00";
  }

  y.innerHTML =
    ' <div class="result"><div class="result__rank">' +
    rank +
    '</div><div class="result__time">' +
    mm +
    ":" +
    ss +
    "," +
    ml +
    '</div><div class="result__time-out">' +
    mm2 +
    ":" +
    ss2 +
    "," +
    ml2 +
    "</div></div></div>";
}

function UpClock() {
  if (count == 0) {
    var height = setInterval(function () {
      $("clock-text").style.verticalAlign = unit + "vh";
      unit++;
      if (unit == -10) {
        clearInterval(height);
        unit--;
        count = 1;
        return;
      }
    }, 1);
  }
}
function DownClock() {
  if (count == 1) {
    var height = setInterval(function () {
      $("clock-text").style.verticalAlign = unit + "vh";
      unit--;
      if (unit == -30) {
        clearInterval(height);
        unit++;
        count = 0;
        $("lap").style.verticalAlign = unit + "vh";
      }
    }, 1);
  }
}
