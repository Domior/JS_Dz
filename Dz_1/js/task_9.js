let userNumber = +prompt('TASK_9 Enter your number to reverse: ')
let result = 0;
while (userNumber) {
    result *= 10;
    result += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}
alert(`${result}`);