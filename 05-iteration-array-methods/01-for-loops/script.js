// for([initialExpression]; [conditionExpression]; [incrementExpression])
//     statement;

// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         console.log('Now i', i);
//     }

//     console.log('Number', i);
// } 

// Nested loops
// for (let i = 1; i <= 10; i++) {
//     console.log('Number ', i);

//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {

    if (names[i] === 'Sara') {
        console.log(`${names[i]} is the best`);
    } else {
        console.log(names[i]);
    }

}