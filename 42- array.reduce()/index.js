// array.filter() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut); // The total is: $75

console.log(`The total is: $${total}`);

function checkOut(total, element) {
  return total + element;
}
