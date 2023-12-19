// The idea behind a module is that it's a file of reusable
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a books

// import { PI, getCircumference, getArea } from "./math_util.js";
// console.log(PI);
// console.log(getCircumference(10));
// console.log(getArea(10));

// another way to import everything
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
