// Get child element from the parent
let output;

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[3].innerText;
output = parent.children[3].className;
output = parent.children[3].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

output = parent.firstElementChild.innerText = 'Child One';
output = parent.lastElementChild.innerText = 'Child Four';

// Get parent elements from child
const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '2px solid blue';
child.parentElement.style.padding = '20px';

// Sibling elements 
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);