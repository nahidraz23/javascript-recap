let x;

// Object Literals
// const todo = {};

// Object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Nahid';
todo.isAdmin = true;

x = todo;

const person = {
    address: {
        coords: {
            lat: 45.454,
            lang: -32.343,
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 2}

// ES6
const obj3 = {...obj1, ...obj2};

// before ES6
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    {
        id: 1,
        name: 'Buy Milk',
    },
    {
        id: 2,
        name: 'Buy Shirt',
    },
    {
        id: 3,
        name: 'Pickup kids from school',
    },
    {
        id: 4,
        name: 'Buy Milk',
    }
]

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age'); // return boolean

console.log(x);