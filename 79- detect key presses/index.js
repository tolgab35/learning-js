const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 15;
      myDiv.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 15;
      myDiv.style.top = y + "px";
      break;
    case "ArrowRight":
      x += 15;
      myDiv.style.left = x + "px";
      break;
    case "ArrowLeft":
      x -= 15;
      myDiv.style.left = x + "px";
      break;
    default:
      break;
  }
}
