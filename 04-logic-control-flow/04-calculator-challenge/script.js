const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+' :
            console.log(num1 + num2);
            break;
        case '-' :
            console.log(num1 - num2);
            break;
        case '*' :
            console.log(num1 * num2);
            break;
        case '/' :
            console.log(num1 / num2);
            break;
        default: 
            console.log('Invalid Operator');
    }
}

calculator(5, 2, '&');