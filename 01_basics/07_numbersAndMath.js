const score = 100;

const balance = new Number(400);

console.log(score);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const totalPrice = 182.8673;
console.log(totalPrice.toPrecision(4));

const subscribersCount = 1000000;

console.log(subscribersCount.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// _____________________Math______________________

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.max(3, 5, 3, 2, 4, 7, 6));
// console.log(Math.min(3, 5, 3, 2, 4, 7, 6));
// console.log(Math.sqrt(144));

// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;

const randomOfRange = Math.floor(Math.random() * ((max - min) + 1)) + min;
console.log(randomOfRange);