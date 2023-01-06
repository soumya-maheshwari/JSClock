setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amORpm = "AM";

  if (hour > 12) {
    hour -= 12;
    amORpm = "PM";
  }
  if (hour == 0) {
    amORpm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let currentTime = hour + ":" + minutes + ":" + seconds + " " + amORpm;
  document.getElementById("clock").innerHTML = currentTime;
}

// function play() {
//   var audio = new Audio("clockSound.mp3");
//   audio.play();
// }
// setInterval(play, 1000);

showTime();
