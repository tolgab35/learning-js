// slice() extracts a section of a string
//         and returns it as a new string,
//         without modifying the original string

let fullName = "Tolga Boz";
let firstName;
let lastName;

// firstName = fullName.slice(0, 5);
// lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);