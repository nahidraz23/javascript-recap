let x;

const arr = [33, 45, 2, 56, 30];

// arr.push(100); // add element to the end 

// arr.pop(); // remove element from the end

// arr.unshift(55); // add element to the beginning

// arr.shift(); // remove element from the the beginning

// arr.reverse();

x = arr.includes(30); // returns boolean

x = arr.indexOf(2); // returns the index of the given element, if element not present it will return -1

x = arr.slice(1, 3); // it doesn't manipulate the original array

// x = arr.splice(1, 3) // it will manipulate the original array

// x = arr.splice(3,1) // remove single element from the array

x = arr.splice(1, 4).reverse().toString().charAt(0); // this is called chaining

console.log(x);