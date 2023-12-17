// setInterval() = invokes a function repeatedly after a number of milliseconds
//                 asynchronous function (doesn't pause execution)

let count = 0;
let max = Number(window.prompt("Count up to what #?"));

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
