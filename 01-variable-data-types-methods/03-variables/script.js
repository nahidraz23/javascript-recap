// Ways to to declare a variable
// var, let, const

let firstName = 'Nahid';
let lastName = 'Raz';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Namig Convenstions
// Only letters, numbers, underscores and dollar signs
// Can't start with number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if(true){
    score = score + 1;
}

console.log(score);

const x = 100;

console.log(x);

const arr = [1, 2, 3, 4];

// arr = [1, 2, 3, 4, 5] error, cannot re-assign value to const

arr.push(5) // using push method we can update the array

console.log(arr);

const person = {
    name: 'Nahid'
}

person.name = 'Raz'; //update the person object 
person.email = 'nzamanraz@gmail.com'

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10; e = 20; f = 40;

console.log(d , e);

console.log(a); // undefined

