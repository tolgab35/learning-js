/*
    arithmetic expression is a combination of...
    operands (values, varuables, etc.)
    operators (* - + / %)
    that can be evaluated to a value
    ex. y = x + 5
*/

let students = 21;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

/*
    operator presedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);
console.log(result);