/// Numbers
const score = 100;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toFixed(2));

const hundreds = 1123.88996;
// console.log(hundreds.toPrecision(4));

const earning = 10000000;
// console.log(earning.toLocaleString('en-IN'));



//////////////////////// MATH ///////////////////////

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.sin(0));
// console.log(Math.sin(90));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.7));

console.log( Math.floor( Math.random() * 10 ) + 1 );

// Generate number in a range
const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);