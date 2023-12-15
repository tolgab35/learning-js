// rest parameters = represents an indefinite number
// ...               of parameters
//                   (packs arguments into an array)

let a = 1,
  b = 2,
  c = 3,
  d = 4,
  e = 5;
console.log(sum(a, b, c, d, e));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
