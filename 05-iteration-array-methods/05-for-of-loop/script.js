// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    {name: 'Brad'},
    {name: 'Kete'},
    {name: 'John'},
    {name: 'Mike'},
]

// for (const item of items) {
//     console.log(item);
// }

for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

const map = new Map();
map.set('name', 'John');
map.set('age', 20);

for (const[key, value] of map) {
    console.log(key, value);
}