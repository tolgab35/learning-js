// How to accept user input
// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log("Welcome ", username);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}