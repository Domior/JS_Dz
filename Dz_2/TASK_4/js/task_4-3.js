const number = +prompt('TASK_3 Enter a three-digit number: ');
const number1 = parseInt(number / 100);
const number2 = parseInt(number / 10) % 10;
const number3 = number % 10;

number1 === number2 || number2 === number3 || number1 === number3 ? alert('Number match was found') : alert('No match between the numbers');