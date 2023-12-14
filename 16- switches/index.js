// switch = statement that examines a value
//          for a match against many case clauses
//          More efficient than many 'else if' statements

let grade = window.prompt("What is your grade?");

switch (grade.toUpperCase()) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed ... barely.");
        break;
    case "F":
        console.log("You FAILED.");
        break;
    default:
        console.log(grade, "is not a letter grade!");
        break;
}