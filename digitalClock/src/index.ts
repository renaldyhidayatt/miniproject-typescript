setInterval(function () {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
    if (seconds < 10) {
      seconds = parseInt("0") + seconds;
    }
    if (minutes < 10) {
      minutes = parseInt("0") + minutes;
    }

    let clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    let clock = document.getElementById("clock") as HTMLInputElement;

    clock.innerText = clockTime;
  }
}, 1000); // satu detik;