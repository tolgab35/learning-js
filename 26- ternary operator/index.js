// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False :

// condition ? exprIfTrue : exprIfFalse

let adult = checkAge(18);

function checkAge(age) {
  return age >= 18
    ? console.log("You are adult")
    : console.log("You are child");
}

checkWinner(true);

function checkWinner(win) {
  return win ? console.log("You WIN!") : console.log("You are a LOSER!");
}
