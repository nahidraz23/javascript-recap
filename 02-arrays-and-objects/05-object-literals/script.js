let x;

const person = {
    name: 'Nahid Raz',
    age: 25,
    isAdmin: true,
    address: {
        street: 'Vatara',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    hobbies: ['coding', 'reading'],
};

x = person.name;
x = person['age'];
x = person.address.city;
x = person.hobbies[1];

person.name = 'Zaman Raz';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, My name is ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'Nahid',
    'last name': 'Raz'
};

x = person2['first name'];

console.log(x);