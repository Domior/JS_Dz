const array = ['Яблоко', 'Банан', 'Ананас']

//map

// console.log(array.reduce(((previousValue, elem) => {
//     previousValue.push(elem[0]);
//     return previousValue;
// }), []));






//filter

// console.log(array.reduce(( (previousValue, elem) => {
//         if (elem[0].toLowerCase() == 'а') {
//             previousValue.push(elem);
//         }
//         return previousValue;
//     } ), []));



//forEach

// array.reduce(((previousValue, elem, i) => {
//     array[i] = `${i + 1}: ${elem}`
//     previousValue.push(elem);

//     return previousValue;
// }), []);
// console.log(array);