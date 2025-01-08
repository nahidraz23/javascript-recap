// Default Params
function resgisterUser(user = 'Bot') {
    // if(!user){
    //     user = 'Bot';
    // }

    return user + ' is registerd';
}

console.log(resgisterUser());

// Rest Params
function sum(...numbers){
    // return numbers;
    let total = 0;

    for(const num of numbers){
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as Params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Nahid'
};

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: 'Raz'
}));

// Arrays as Params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
};

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



