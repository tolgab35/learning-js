// spread operator = allows an iterable such as an
// ...               array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)

let userName = "Tolga Boz";
console.log(...userName); // T o l g a   B o z

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...numbers); // 1 2 3 4 5 6 7 8 9

let maximum = Math.max(...numbers);
console.log(maximum); // 9

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);

console.log(class1);
