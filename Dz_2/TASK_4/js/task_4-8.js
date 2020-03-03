const circleLength = +prompt('TASK_8 Enter the length of the circle: ');
const squarePerimeter = +prompt('Enter the perimeter of the square: ');

const diameterCircle = circleLength / Math.PI;
const squareSide = squarePerimeter / 4;

if (diameterCircle == squareSide) {
    alert('Circle can be in the square');
} else if (diameterCircle !== squareSide) {
    alert('Circle can not be in the square');
} else {
    alert('Error')
}