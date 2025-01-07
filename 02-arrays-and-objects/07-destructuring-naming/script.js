let x;

const firstName = 'Nahid';
const lastName = 'Raz';
const age = 25;

const person = {
    firstName,
    lastName,
    age,
}

x = person.age;

// Destructuring Object
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Nahid',
    }
}

const { id : todoId, title, user: {name} } = todo; 

console.log(todoId, title, name);

// Destructuring Arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
