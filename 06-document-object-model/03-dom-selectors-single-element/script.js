// document.getElementById()
let output;

output = document.getElementById('app-title').id;
output = document.getElementById('app-title').className;
output = document.getElementById('app-title').getAttribute('id');

// Set attributes
// output = document.getElementById('app-title').id = 'title';
output = document.getElementById('app-title').title = 'Shopping List';
output = document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// Get/Change content
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<Strong>Shopping List</Strong>';

// Change Style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
output = document.querySelector('h1');
output = document.querySelector('#app-title');
output = document.querySelector('.container');
output = document.querySelector('input[type="text"]');
output = document.querySelector('input[type="text"]');
output = document.querySelector('li:nth-child(2)').innerText;

secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'green'

console.log(firstItem);