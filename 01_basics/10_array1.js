const friends = ["Abdullah", "Omar", "Musa", "Ebrahim"];
const otherFriends = ["Khalid Bin Walid", "Ertugrul"];

// friends.push(otherFriends);

// console.log(friends);

const allFriends = friends.concat(otherFriends);
// console.log(allFriends);

const allFriends1 = [...friends, ...otherFriends]; // Concatinating two arrays by using spread operator

// console.log(allFriends1);


const nestedArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];
console.log(nestedArray[3][1]); // accessing nested array

const flatArray = nestedArray.flat(Infinity); // converting nested array to a flat array

console.log(flatArray);

let isArray = Array.isArray("Israfil");
console.log(isArray);

isArray = Array.isArray([1, 2, 3]);
console.log(isArray);

let createdArray = Array.from("Israfil");
console.log(createdArray);

createdArray = Array.from({name: "Israfil"}); // this argument is not an iterable therefor is returns an empty array
console.log(createdArray);

let score1 = 100;
let score2 = 200;
let score3 = 300;

const anotherArray = Array.of(score1, score2, score3); // INTERESTING (Array.of())

console.log(anotherArray);