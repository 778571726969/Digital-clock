const hoursElement = document.getElementById("hours");
const mintsElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const amPmElement = document.getElementById("amPm");
setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  hours = (hours < 10 ? "0" : "") + hours;
  let amPm = "AM";
  if (hours > 11) {
    amPm = "PM";
  }
  if (hours > 12) {
    hours -= 12;
  }

  let mints = date.getMinutes();
  mints = (mints < 10 ? "0" : "") + mints;
  let seconds = date.getSeconds();
  seconds = (seconds < 10 ? "0" : "") + seconds;
  hoursElement.innerText = hours;
  mintsElement.innerText = mints;
  secondsElement.innerText = seconds;
  amPmElement.innerText = amPm;
}, 1000);
