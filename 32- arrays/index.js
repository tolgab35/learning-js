// array = think of it as a variable
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];
// fruits[0] = "coconut";

fruits.push("lemon"); // add an element
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to beginning
fruits.shift(); // removes element from beginning
fruits.reverse(); // reverses the array

console.log(fruits.length); // array length is 3

console.log(fruits.indexOf("orange")); // "orange" at index 1

console.log(fruits); // (3) ['banana', 'orange', 'apple']
