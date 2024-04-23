const numbers = [10, 5, 28, 13, 40, 60, 17, 18];

const doubleNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log(doubleNumbers);

const modifiedNumbers = numbers.map((num) => {
    return num + 1;
}).map( (num) => num * 5).filter((num) => num > 200);

console.log(modifiedNumbers);