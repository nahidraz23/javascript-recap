const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

// console.log(div);

button.addEventListener('click', (e) => {
    alert('Button clicked');
    e.stopPropagation();
});

div.addEventListener('click', () => {
    alert('Div clicked');
});

form.addEventListener('click', () => {
    alert('Form clicked');
});

document.body.addEventListener('click', () => {
    alert('Body Clicked');
})