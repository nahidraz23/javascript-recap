let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;


x = num.toFixed(2); // numbers after the fraction

x = num.toPrecision(2); // Total digits including the fraction

x = num.toExponential(2);

x = num.toLocaleString('en-US');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);