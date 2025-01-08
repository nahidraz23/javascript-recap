// Challenge 1

// Solution
const getCelsius = (f) => (f - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(40)} \xB0C`);

// Challenge 2

// Solution
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {min, max};
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3

// Solution

// IIFE using Regular Function
(function(length, width) {
    const area = length * width;

    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);
})(10, 5);

// IIFE using Arrow Function
((length, width) => {
    const area = length * width;

    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);
})(10, 5) 