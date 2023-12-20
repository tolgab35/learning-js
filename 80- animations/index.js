const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
  let timerId = setInterval(frame, 5);

  let scaleX = 1;
  let scaleY = 1;

  function frame() {
    if (scaleY <= 0.01 || scaleY <= 0.01) {
      clearInterval(timerId);
    } else {
      scaleX -= 0.01;
      scaleY -= 0.01;
      myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";
    }
  }
}
/*
function begin() {
  let timerId = setInterval(frame, 5);

  let degrees = 0;
  let x = 0;
  let y = 0;

  function frame() {
    if (x >= 200 || y >= 200) {
      clearInterval(timerId);
    } else {
      degrees += 5;
      x += 1;
      y += 1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }
}
*/
