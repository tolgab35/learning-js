// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)
/*
let age = window.prompt("how old are you?");
console.log(typeof age);

age = Number(age);
age += 1;

console.log("Happy birthday! You are ", age, " years old.");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14)
z = Boolean(""); // false because empty String

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
