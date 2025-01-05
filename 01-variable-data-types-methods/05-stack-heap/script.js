// Values are stored on the stack
const name = 'Nahid';
const age = 25;

// Reference values are stored on the heap
const person = {
    name: 'Raz',
    age: 26
}

let newName = name;
newName = 'NahidRaz';

let newPerson = person;
newPerson.name = 'Nahiduzzaman'

console.log(name, newName);
console.log(person, newPerson);