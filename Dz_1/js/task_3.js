const sideLength = prompt('TASK_3 Enter a length of the square`s side(,sm): ');

calculateArea = (sideLength) => {
    const perimeterArea = sideLength * 4
    alert(`Square\`s perimeter is: ${perimeterArea},sm`)
}
calculateArea(sideLength)