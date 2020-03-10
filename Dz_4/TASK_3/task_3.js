// function popAnalog(array) {
//     const droppedValue = array[array.length - 1];
//     array.length -= 1;
//     console.log(droppedValue, array);
//     return droppedValue;
// }

// popAnalog(["one","two","three","four","five","six","seven"])




// function pushAnalog(array, ...args) {
//     const merged = [ ...array, ...args];

//     array = merged;

//     console.log(array);

//     return array.length;
// }

//     pushAnalog(["one", "two", "three", "four", "five", "six", "seven"], 'hello', 'bye', 'zero')





// function shiftAnalog(array) {
//     const removedValue = array[0]

//     for (let index = 1; index < array.length; index++) {
//         array[index - 1] = array[index]
//     }

//     console.log(array);

//     return removedValue
// }

// shiftAnalog(["one", "two", "three", "four", "five", "six", "seven"])





//  function unshiftAnalog(array, ...args) {
//     array = [ ...args, ...array];

//     console.log(array);
//     return array.length;
// }

// unshiftAnalog(["one", "two", "three", "four", "five", "six", "seven"], 'hello', 'bye', 'zero')







// function concatA(array, ...args) {
//     let newArray = array;

//     for (const obj of args) {
//         if (Array.isArray(obj)) {
//             newArray = [...newArray, ...obj];
//         } else if (obj[Symbol.isConcatSpreadable] && obj.hasOwnProperty('length')) {
//             for (let i = 0; i < obj.length; i++) {
//                 const element = obj[i];

//                 if (element != null) newArray = [...newArray, element];
//             }
//         } else {
//             newArray = [...newArray, obj];
//         }
//     }

//     console.log(newArray);

//     return newArray;
// }

// const array1 = [1, 2, 4];
// const array2 = ['asdf', true];
// const objArray = {
//     0: 'hello',
//     1: 'bye',
//     id: 'bye',
//     [Symbol.isConcatSpreadable]: true,
//     length: 3
// }

// const obj = {
//     id: 5,
//     kill: true
// }

// concatA(array1, array2, objArray, obj);