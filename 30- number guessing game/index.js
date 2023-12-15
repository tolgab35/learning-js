const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  var guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is true! It took you ${guesses} guesses.`);
  } else if (guess < answer) {
    alert("Too small! Try again.");
  } else {
    alert("Too large! Try again.");
  }
};

document.getElementById("hint").innerHTML = answer;
