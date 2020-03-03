const money = +prompt('TASK_6 Enter an amount of money(USD): ');
const choice = +prompt('Choose a currency to convert:\n1 - EUR\n2 - UAH\n3 - AZN');

const EUR = 0.91;
const UAH = 24.60;
const AZN = 1.7;

let result;

switch (choice) {
    case 1: {
        result = String((EUR * money).toFixed(2)) + " €";
        break;
    }
    case 2: {
        result = String((UAH * money).toFixed(2)) + " ₴";
        break;
    }
    case 3: {
        result = String((AZN * money).toFixed(2)) + " ₼";
        break;
    }
}

alert(`You will have: ${result}`);