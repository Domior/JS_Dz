const year = +prompt('TASK_4 What year it is?: ');

year % 400 == 0 || year % 4 == 0 && year % 100 ? alert('It is a leap year') : alert('It is not a leap year');