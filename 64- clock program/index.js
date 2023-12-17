function updateClock() {
  let date = new Date();
  document.getElementById("myLabel").innerHTML = clock(date);
}

function clock(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${amOrPm}`;
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

setInterval(updateClock, 1000);
