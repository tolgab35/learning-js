// array.map() = executes a provided callback function
//               once for each array element
//               AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

numbers.forEach(print); // 1 2 3 4 5
squares.forEach(print); // 1 4 9 16 25
cubes.forEach(print); // 1 8 27 64 125

function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}

function print(element) {
  console.log(element);
}
