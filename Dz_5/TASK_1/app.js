// 1
// function pow(num, power) {
//     if (power == 1) return num;
//     return num * pow(num, power - 1);
// }
// console.log(pow(2, 16));

// 2
// function gcd(num1, num2) {
//     let maxNum = Math.max(num1, num2);
//     let minNum = Math.min(num1, num2);
//     if (maxNum % minNum == 0) return minNum;
//     return gcd(minNum, maxNum % minNum);
// }
// console.log(gcd(612, 680));

// 3
// function maxDig(num) {
//     let m, n;
//     if (num < 10) return num;
//     n = num % 10;
//     m = maxDig(Math.floor(num / 10));
//     return n > m ? n : m;
// }
// console.log(maxDig(478149));

// 4
// function isPrime(num, i = 2) {
//     if (i == num) return true;
//     if (!(num % i)) return false;
//     return isPrime(num, ++i);
// }
// console.log(isPrime(113));

// 5
// function factors(num, i = 2, result = [], index = 0) {
//     if (i == num) {
//         result[index] = i;
//         return result;
//     }

//     if (!(num % i)) {
//         result[index] = i;
//         return factors((num /= i), 2, result, ++index);
//     } else {
//         return factors(num, ++i, result, index);
//     }
// }
// console.log(div(680));

// 6
// function fib(num) {
//     if (num <= 1) return num;
//     return fib(num - 2) + fib(num - 1);
// }
// console.log(fib(6));