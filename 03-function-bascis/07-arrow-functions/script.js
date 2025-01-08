// Regular Function Declaration
// function add(a, b) {
//     return a + b;
// }

// Arrow Function Declaration
const add = (a, b) => {
    return a + b;
}

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = a => a * 2;

// Returning an object
const createObj = () => ({
    name: 'Nahid'
});

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n){
//     console.log(n);
// })

// Arrow function in a callback
numbers.forEach(n => console.log(n))

console.log(add(1, 3));
console.log(subtract(5, 4));
console.log(double(4));
console.log(createObj());
