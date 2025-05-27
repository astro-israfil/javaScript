const myArray = [1, 2, 3, 4, 5];

console.log(myArray);
console.log(myArray.length);


myArray.push(6);
myArray.push(7);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

myArray.unshift(9);
// console.log(myArray);

myArray.shift();
// console.log(myArray);

console.log(myArray.includes(8));
console.log(myArray.indexOf(8));

console.log(myArray.join("-"));


const numbers = [1, 2, 3, 4, 5, 6, 7];

const slicedPartOfNumbers = numbers.slice(1, 4);

console.log("numbers", numbers);
console.log("sliced part of numbers", slicedPartOfNumbers);


const portionOfNumbers = numbers.splice(1, 4);

console.log("numbers", numbers);
console.log("Portion of numbers", portionOfNumbers);