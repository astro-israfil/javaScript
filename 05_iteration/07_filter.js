const numbers = [1, 3, 5, 6, 7, 8, 9, 10, 15];

const evenNumbers = numbers.filter(function (item, index, arr) {
    // console.log(item, index, arr);
    return item % 2 === 0;
});

console.log(evenNumbers);