// Number Challenge solution
const x = Math.floor(Math.random() * 101);

const y = Math.floor(Math.random() * 51);

const sumOutPut = x + y;
const differenceOutput = x -y;
const productOutput = x * y;
const quotientOutput = x / y;
const remainderOutput = x % y;

console.log('x', x);
console.log('y', y);
console.log(sumOutPut);
console.log(differenceOutput);
console.log(productOutput);
console.log(Number(quotientOutput.toFixed(2)));
console.log(remainderOutput);