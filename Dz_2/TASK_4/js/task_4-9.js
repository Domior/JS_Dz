const firstQuestion = +prompt('TASK_9 The year of start of World War II?\n1 - 1941\n2 - 1939\n3 - 1945');
const secondQuestion = +prompt('Which continent is the largest?\n1 - Asia\n2 - North America\n3 - Africa');
const thirdAQuestion = +prompt('Which river is the longest?\n1 - Nile River\n2 - Amazon River\n3 - Mississippi');

let points = 0;

if (firstQuestion == 2) {
    points += 2;
} else {
    points += 0;
}

if (secondQuestion == 1) {
    points += 2;
} else {
    points += 0;
}

if (thirdAQuestion == 1) {
    points += 2;
} else {
    points += 0;
}

alert(`Your score is: ${points} points`);