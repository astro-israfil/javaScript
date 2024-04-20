const myArray = [0, 5, 2, 3, 4, 5, 6];

console.log(myArray[1]);

console.log(myArray.length);

const fruits = [];

fruits[0] = "Mango";
fruits[1] = "Banna";
fruits[2] = "Apple";

console.log(fruits);

fruits.push("cherry");

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.unshift("Litchy");

console.log(fruits);

fruits.shift();

console.log(fruits);


const friends = ["Abdullah", "Solaiman", "Musa", "Ebrahim", "Al-haytham"];

let friendsString = friends.join(", ");

console.log(friendsString);

// const firstTwoFriends = friends.slice(0, -3);
const firstTwoFriends = friends.slice(0, 2);

console.log(firstTwoFriends);

console.log("Before splice: ", friends);

const portionOfFriends = friends.splice(1, 3, 10, 20); // splice(start, deleteCount, item1, item2, /* …, */ itemN)

console.log("Portion of friends :", portionOfFriends); // Portion of friends : [ 'Solaiman', 'Musa', 'Ebrahim' ]
console.log("After splice: ", friends); // After splice:  [ 'Abdullah', 10, 20, 'Al-haytham' ]