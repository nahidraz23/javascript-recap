
function insertAfter(newEl, existingEl) {
    const ul = document.querySelector('.items');

    const li = document.createElement('li');
    li.textContent = newEl;
    
    const position = document.querySelector(`li:nth-child(${existingEl})`);

    ul.insertBefore(li, position.nextSibling);
}

insertAfter('Mango', 1);

// function insertAfter(newEl, existingEl) {
    
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

// }


// // New element to insert
// const li = document.createElement('li');
// li.textContent = 'Insert Me After';

// // Existing element to insert after
// const firstItem = document.querySelector('li:first-child');

// // Our custom function
// insertAfter(li, firstItem)

