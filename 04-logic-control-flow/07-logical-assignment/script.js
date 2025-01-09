// ||= assings the right side value only if the left is a falsy value.

let a = false;

// if (!a) {
//     a = 20;
// }

a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 20;

if (b) {
    b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined. 

let c = undefined;

if (c === null || c === undefined) {
    c = 20;
}

c = c ?? 30;

c ??= 30;

console.log(c);

