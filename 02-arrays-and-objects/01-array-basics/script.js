let x;

// Array Literals
const numbers = [12, 45, 56, 56, 33, 55];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'acovado';

// fruits.length = 2;

x = fruits;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'guava';

console.log(x);