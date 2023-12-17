// error = object with a description of
//         something went wrong

//         Can't open a file
//         Lose connection
//         User types incorrect input
//         TypeError

// error = object with a description of
//         something went wrong

// throw = executes a user-defined error

try {
  let x = Number(window.prompt("Enter a #"));

  if (isNaN(x)) throw "That wasn't a number!";
  if (x == "") throw "That was empty!";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("This always executes");
}
