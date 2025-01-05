// let amount = '100';
// let amount = '99.54';
// let amount = 1; // Truthy
// let amount = 0 // Falsy
let amount = 'hello'

// Convert string to number
amount = parseInt(amount);
// amount = +amount // Unary operator
// amount = Number(amount) // using Number constructor

// Convert the number to string
// amount = amount.toString();
// amount = String(amount) // Using String constructor

// Convert string to decimal
// amount = parseFloat(amount)

// Convert number to boolean
// amount = Boolean(amount)
console.log(Math.sqrt(-1)); //NaN
console.log(1 + NaN); // NaN
console.log(undefined + undefined); //NaN
console.log('foo' / 3); //NaN

console.log(amount, typeof amount);