function getFreeChairs(roomInfo) {
    const chairs = roomInfo[0];
    const count = roomInfo[1];

    if (isNaN(count)) return NaN;

    let busyCount = 0;
    let total = 0;

    chairs.match(/X+/g).forEach(chairsInfo => {
        busyCount += chairsInfo.length;
    });

    total = count - busyCount;

    if (total < 0) total = 0;

    return total;
}

function meeting(rooms, count) {
    let freeChairs = [];
    let freeChairsCount = 0;

    if (!Array.isArray(rooms) || isNaN(count)) return 'Data error!';

    for (const room of rooms) {
        const roomCount = getFreeChairs(room);

        freeChairs.push(roomCount);
        freeChairsCount += roomCount;
    }

    if (freeChairsCount >= count) {
        return `Game On →[${freeChairs}]`;
    } else {
        return `Not enough! →[${freeChairs}]`;
    }
}

console.log(
    meeting(
        [
            ['XXXX', 3],
            ['XXXXX', 6],
            ['XXXXXX', 9]
        ],
        4
    )
);