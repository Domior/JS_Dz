const userBirthYear = prompt('TASK_2 Enter your year of birth: ')
const currentYear = 2020;

calculateBirthYear = (currentYear, userBirthYear) => {
    const userAge = currentYear - userBirthYear;
    alert(`Your age is: ${userAge}`);
}
calculateBirthYear(currentYear, userBirthYear)