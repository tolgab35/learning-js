// 2D array = An array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][0] = "mangoes"; // apples replaced with mangoes

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}
