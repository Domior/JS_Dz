const userNubmer = +prompt('TASK_2 Enter your number(0-9): ');

switch (true) {
    case userNubmer == 0:
        alert(')')
        break;
    case userNubmer == 1:
        alert('!')
        break;
    case userNubmer == 2:
        alert('@')
        break;
    case userNubmer == 3:
        alert('#')
        break;
    case userNubmer == 4:
        alert('$')
        break;
    case userNubmer == 5:
        alert('%')
        break;
    case userNubmer == 6:
        alert('^')
        break;
    case userNubmer == 7:
        alert('&')
        break;
    case userNubmer == 8:
        alert('*')
        break;
    case userNubmer == 9:
        alert('(')
        break;
    default:
        alert('Error')
        break;
}