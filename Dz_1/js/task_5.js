const distance = prompt('TASK_5 Enter distance between cities(,km): ')
const time = prompt('Enter time you want to get there(,h): ')

calculateSpeed = (distance, time) => {
    const speed = distance / time;
    alert(`You should be moving with ${speed.toFixed(2)} kmph `)
}
calculateSpeed(distance, time)