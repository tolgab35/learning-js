// The Date object is used to work with dates & times

let date = new Date(); // current date
// let date = new Date(); // default date
// let date = new Date(2023, 0, 1, 2, 3, 4, 5); // years , months , days , hours , minutes , seconds , m.seconds
// let date = new Date("January 1, 2023 00:00:00"); // shows spesific date

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let ms = date.getMilliseconds();

console.log(year);
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(month);
console.log(hour);
console.log(minute);
console.log(second);
console.log(ms);
*/ /*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

document.getElementById("myLabel").innerHTML = date.toLocaleString();

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes() + 1;
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${hours}/${minutes}/${seconds} ${amOrPm}`;
}

console.log(formatDate(date));
console.log(formatTime(date));
