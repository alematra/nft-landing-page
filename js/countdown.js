//Countdown Timer
const clockdiv = document.getElementById("countdown");
const revealDateSpan = document.getElementById("revealDate");
const revealDate = new Date("Mar 20, 2022 8:00:00 PM UTC");
y = revealDate.getFullYear();
m = revealDate.getMonth() + 1;
d = revealDate.getDate();
h = revealDate.getHours();
const countDownTime = revealDate.getTime();


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
    revealDate.innerHTML = "passed";
  } else {
    clockdiv.querySelector(".days").innerHTML = days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
    revealDateSpan.innerHTML = m + "/" + d + "/" + y + " at " + h + ":00";
  }
});
