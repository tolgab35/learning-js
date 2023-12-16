// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

console.log(store.get("t-shirt")); // 20 (gets the value's key)
store.set("hat", 40); // adds a new element to map
store.delete("socks"); // deletes an element from map

console.log(store.has("underwear")); // checks the map if the value exists
console.log(store.size); // 4

let shoppingCart = 0;

for (const [item, price] of store) {
  shoppingCart += price;
}

store.forEach((value, key) => console.log(`${key}: $${value}`));

console.log("-------------------------------------");
console.log("Total cost in the shopping cart: $" + shoppingCart);
