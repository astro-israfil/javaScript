// const friends = ["Abdullah", "Omar", "Khalid", "Osama"];

// for (const friend of friends) {
//     console.log(friend);
// }

// const numbers = [10, 20, 30, 40, 50, 60, 70];

// for (const num of numbers) {
//     if (num === 30) {
//         console.log("Number 30 is detected");
//         continue;
//     }
//     console.log(num);
// }


// const friendMap = new Map();

// friendMap.set("name", "Khalid");
// friendMap.set("SA", "Saudi Arabia");
// friendMap.set("age", 20);

// console.log(friendMap);


// for (const [key, value] of friendMap) {
//     console.log(key, " ==> ", value);
// }

const userObj = {
    name: "israfil",
    age: 23,
    profession: "programmer",
}

// TypeError: userObj is not iterable
// for (const key of userObj) {
//     console.log(key);
// }