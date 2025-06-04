const userObj = {
    name: "israfil",
    email: "israfil@google.com",
    age: 24,
    isLoggedIn: true,
}


// for (const key in userObj) {
//     console.log(`${key} is ${userObj[key]}`);
// }

const myMap = new Map();
myMap.set("BD", "Bangladesh");
myMap.set("IN", "India");
myMap.set("USA", "United State of America");

// NOT WORKS WITH MAP 
// for (const key in myMap) {
//     console.log(key);
// }

const languages = ["C", "C++", "Python", "JavaScript", "Rust"];

for (const key in languages) {
    // console.log(key);
    console.log(languages[key]);
}