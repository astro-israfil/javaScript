const numbers = [10, 5, 28, 13, 40, 60, 17, 18];

numbers.filter( function (num, index, arr) {
    // console.log(num, index, arr);
} );


// Filter out even numbers form numbers array
const evenNumbers = numbers.filter (function (num) {
    return num % 2 === 0;
});

console.log("even numbers: ", evenNumbers);

// Filter out number which are greater than 30;
const numbersGreater30 = numbers.filter( (num) => num > 30 );

console.log("These numbers are greater than 30: ",numbersGreater30);