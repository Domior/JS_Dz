const arr = [3,2,32,1,345,123];

const twoOldestAges = (array) => {
    const sorted = array.sort((a, b) => a - b);
    const arr1 = [sorted[sorted.length - 2], sorted[sorted.length - 1]];
    console.log(arr1[0], arr1[1]);
}
twoOldestAges(arr);