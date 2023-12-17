// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000); // Wait for 3000ms (3 second) after the first message
let timer3 = setTimeout(thirdMessage, 9000); // Wait for 3000ms (3 second) after the second message

function firstMessage(item, price) {
  alert(`Buy this ${item} for $${price}!`);
}
function secondMessage() {
  alert("This is not a scam!");
}
function thirdMessage() {
  alert("DOIT!");
}

document.getElementById("myButton").onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);

  console.log("thanks for buying<3");
};
