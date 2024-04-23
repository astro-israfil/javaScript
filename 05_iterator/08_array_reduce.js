const numbers = [10, 5, 28, 13, 40, 60, 17, 18];

const initialOfSum = 0;

// const sumOfNumbers = numbers.reduce(function (acc, value, index, arr) {
//     console.log(`acc ${acc}, value ${value}, index ${index}, arr ${arr}`);
//     return acc + value;
// }, initialOfSum);

const sumOfNumbers = numbers.reduce(function (acc, value) {
    return acc + value;
}, initialOfSum);

console.log("sum of numbers is: ", sumOfNumbers);