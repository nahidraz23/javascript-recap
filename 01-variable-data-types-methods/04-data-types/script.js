// String 
const firstName = 'Nahid';

// Number
const age = 30;
const temp = 98.7;

// Boolean
const isMarried = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types
const numbers = [1, 2, 3, 4];

const person = {
    name: 'Nahid'
}

function sayHello () {
    console.log('hello');
}

const output = sayHello;

console.log(output, typeof output);