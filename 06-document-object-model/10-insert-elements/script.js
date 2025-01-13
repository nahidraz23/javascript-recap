// insetAdjacentElement Example
function insetElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insetAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insetText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML Example
function insetHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}


insetElement();
insetText();
insetHTML();
insertBeforeItem();