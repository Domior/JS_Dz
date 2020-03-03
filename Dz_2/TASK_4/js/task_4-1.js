const userAge = +prompt('TASK_1 Enter your age: ');

const identifyUserStatus = () => {
    switch (true) {
        case userAge > 0 && userAge <= 2:
            alert('Your are a baby!')
            break;
        case userAge > 2 && userAge <= 12:
            alert('Your are a child!')
            break;
        case userAge > 12 && userAge <= 18:
            alert('Your are a teenager!')
            break;
        case userAge > 18 && userAge < 60:
            alert('Your are an adult!')
            break;
        case userAge > 60:
            alert('Your are a pensioner!')
            break;
        default:
            alert('Error')
            break;
    }
}
identifyUserStatus();