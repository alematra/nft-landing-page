//Countdown Timer
const clockdiv = document.getElementById("countdown");
const countDownTime = new Date("Mar 06, 2022 4:00:00 PM UTC").getTime();

const countdownfunction = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);

  if (diff < 0) {
    clockdiv.style.display = "none";
    clearInterval(countdownfunction);
  } else {
    clockdiv.querySelector(".days").innerHTML = days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
  }
});
