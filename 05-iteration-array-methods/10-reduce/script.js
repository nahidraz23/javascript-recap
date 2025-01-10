const numbers = [1, 2, 3, 4, 5, ,6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

const cart = [
    {id: 1, name: 'product 1', price: 150},
    {id: 2, name: 'product 2', price: 130},
    {id: 3, name: 'product 3', price: 250}
];

const totalPrice = cart
// .map(item => item.price)
.reduce((acc, product) => acc + product.price, 0)

console.log(totalPrice);