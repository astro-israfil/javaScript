const classFriends = ["Omar", "Abdullah", "Khalid", "Hasan"];
const localFriends = ["Hamza", "Adnan", "Sam", "Samir"];

const allFriends = classFriends.concat(localFriends);
console.log(allFriends);

const allNewFriends = [...classFriends, ...localFriends];
console.log(allNewFriends);

const myArray = [1, 2, [3, 4, 5], 6, 7, [9, 10, [11, 12]]]

const myRealArray = myArray.flat(Infinity);
console.log(myRealArray);

console.log(Array.isArray("Israfil"));
console.log(Array.from("Israfil"));



const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));