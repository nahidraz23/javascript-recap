const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    // console.log(e.target.value);
}

function onChecked(e) {
    console.log(e.target.checked);
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '2px';
    itemInput.style.outlineColor = 'black';

}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkboxInput.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);