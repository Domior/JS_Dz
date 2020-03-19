const arr = [[3,2,32,1],
            [33,22,55],
            [16,42,345,79,1]];

const sumMin = (array) => {
    const elemnt1 = array[0].sort((a, b) => a - b);
    const elemnt2 = array[1].sort((a, b) => a - b);
    const elemnt3 = array[2].sort((a, b) => a - b);
    const newArr = [elemnt1, elemnt2, elemnt3];

    const sum = newArr[0][0] + newArr[1][0] + newArr[2][0];
    console.log(sum);
}
sumMin(arr);