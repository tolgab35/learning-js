// function expressions = function without a name (anonymous function)
//                        avoid polluting the global scope with names
//                        Write it, then forget about it
/* 
// first example
const greeting = function () {
  console.log("Hello!");
};

greeting(); // "Hello!"
*/

let count = 0;

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
