// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue() {
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = "lightblue";
}

/*
const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);

function changeRed() {
  innerDiv.style.backgroundColor = "red";
}
function changeGreen() {
  innerDiv.style.backgroundColor = "lightgreen";
}
*/
