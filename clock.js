var sHand;
var mHand;
var hHand;
var mBox;
var dBox;
var yBox;

var seconds = 0;
var minutes = 0;
var hours = 0;

function secondRotation(seconds) {
  return (seconds / 60) * 360;
}

function minuteRotation(minutes, seconds) {
  var wholeMinutes = (minutes / 60) * 360;
  var subMinutes = (seconds / 3600) * 360;
  return wholeMinutes + subMinutes;
}

function hourRotation(hours, minutes) {
  var wholeHours = (hours / 12) * 360;
  var subHours = (minutes / 720) * 360;
  return wholeHours + subHours;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 12) {
    hours = 0;
  }

  sHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";
  mHand.style.transform = "rotate(" + minuteRotation(minutes, seconds) + "deg)";
  hHand.style.transform = "rotate(" + hourRotation(hours, minutes) + "deg)";
}

document.addEventListener('DOMContentLoaded', function() {

  var now = new Date();

  minutes = now.getMinutes();
  seconds = now.getSeconds();
  hours = now.getHours() >= 12 ? now.getHours() - 12 : now.getHours();

  sHand = document.getElementById("second");
  mHand = document.getElementById("minute");
  hHand = document.getElementById("hour");

  mBox = document.getElementById('monthbox');
  dBox = document.getElementById('daybox');
  yBox = document.getElementById('yearbox');

  var monthNum = now.getMonth();
  switch (monthNum) {
    case 0:
      mBox.value = "JAN";
      break;
    case 1:
      mBox.value = "FEB";
      break;
    case 2:
      mBox.value = "MAR";
      break;
    case 3:
      mBox.value = "APR";
      break;
    case 4:
      mBox.value = "MAY";
      break;
    case 5:
      mBox.value = "JUN";
      break;
    case 6:
      mBox.value = "JUL";
      break;
    case 7:
      mBox.value = "AUG";
      break;
    case 8:
      mBox.value = "SEP";
      break;
    case 9:
      mBox.value = "OCT";
      break;
    case 10:
      mBox.value = "NOV";
      break;
    case 11:
      mBox.value = "DEC";
      break;
  }

  dBox.value = now.getDate();
  yBox.value = now.getFullYear();

  var intervalId = setInterval(tick, 1000);

});
