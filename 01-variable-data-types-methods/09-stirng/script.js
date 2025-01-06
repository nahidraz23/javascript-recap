let x;

const name = 'Nahid';
const age = 26;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals
x = `Hello my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
// const s = 'Hello World'; // string
const s = new String('Hello World'); // object

x = typeof s;

// x = s.length;

// Access value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('l');

x = s.substring(0, 4); // formula n - 1. here n = 4, so, this will print 4 charecters

x = s.substring(7); // start from 7 and will print the rest

x = s.slice(0, 11);

x = '                   Hello World';

x = s.trim(); // remove white space

x = s.replace('World', 'Duniya');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);