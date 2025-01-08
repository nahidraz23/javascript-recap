// alert('Hello');
// console.log(innerWidth);

const x = 100;

console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

if(true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1; // variable shadowing changing the global value of x with the function scope value of x
    const y = 50;
    console.log(x + y);
}

// console.log(y); // error

add();