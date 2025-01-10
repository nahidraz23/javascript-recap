// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    age: 28
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-987-6543',
    age: 34
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    phone: '555-345-6789',
    age: 41
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '555-876-5432',
    age: 25
  },
  {
    firstName: 'Daniel',
    lastName: 'Garcia',
    email: 'daniel.garcia@example.com',
    phone: '555-567-8901',
    age: 30
  },
  {
    firstName: 'Olivia',
    lastName: 'Martinez',
    email: 'olivia.martinez@example.com',
    phone: '555-654-3210',
    age: 29
  },
  {
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@example.com',
    phone: '555-765-4321',
    age: 37
  },
  {
    firstName: 'Sophia',
    lastName: 'Taylor',
    email: 'sophia.taylor@example.com',
    phone: '555-234-5678',
    age: 22
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    email: 'william.anderson@example.com',
    phone: '555-890-1234',
    age: 45
  },
  {
    firstName: 'Mia',
    lastName: 'Thomas',
    email: 'mia.thomas@example.com',
    phone: '555-678-9012',
    age: 31
  }
]

// Solution
const youngPeople = people
    .filter(p => p.age <= 25)
    .map(p => ({
        name: p.firstName + ' ' + p.lastName,
        email: p.email
    }));

console.log(youngPeople);

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

// Solution
const positiveSum = numbers
    .filter(number => number >= 0)
    .reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

// Solution
const capitalizedWords = words
    .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1));

console.log(capitalizedWords);