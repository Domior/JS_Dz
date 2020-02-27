const userRadius = prompt('TASK_4 Enter a radius of a circle: ');

calculateArea = (userRadius) => {
    const circleArea = (Math.PI * userRadius * userRadius)
    alert(`Circle\`s area is: ${circleArea.toFixed(3)},sqsm`)
}
calculateArea(userRadius)