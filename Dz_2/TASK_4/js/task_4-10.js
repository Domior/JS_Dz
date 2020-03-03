let day = +prompt('TASK_10 Enter a day: ');
let month = +prompt('Enter a month: ');
let year = +prompt('Enter a year: ');

function isLeapYear(year) {
    let result = false;
    if (year % 400 == 0) {
        result = true;
    } else if (year % 4 == 0 && year % 100 != 0) {
        result = true;
    }
    return result;
}

switch (true) {
    case isLeapYear(year) && (day == 28 && month == 2): {
        day = 29;
        break;
    }
    case isLeapYear(year) && (day == 29 && month == 2): {
        day = 1;
        month = 3
        break;
    }
    case !isLeapYear(year) && (day == 28 && month == 2): {
        day = 1;
        month = 3;
        break;
    }
    case day == 31 && month == 12: {
        day = 1;
        month = 1;
        year += 1;
        break;
    }
    case day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10): {
        day = 1;
        month += 1;
        break;
    }
    case day == 30 && (month == 4 || month == 6 || month == 9 || month == 11): {
        day = 1;
        month += 1;
        break;
    }
    case day >= 1 && day < 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12): {
        day += 1;
        break;
    }
    case day >= 1 && day < 30 && (month == 4 || month == 6 || month == 9 || month == 11): {
        day += 1;
        break;
    }
    case day >= 1 && day < 28 && month == 2: {
        day += 1;
        break;
    }
    default: {
        alert("Error! Enter a valid date!");
    }
}

if (day <= 9) {
    day = '0' + day;
}
if (month <= 9) {
    month = '0' + month;
}

alert(String(day) + "." + month + "." + year);