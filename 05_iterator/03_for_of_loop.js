const numbers = [10, 20, 30, 40, 50, 60];

for (const num of numbers) {
    // console.log(num);
}

const myString = "Hello World!";

for (const char of myString) {
    if (char === " ") {
        // console.log("the charecter is :","' '");
        continue;
    }
    // console.log("the charecter is :", char);
}


// ########################### MAP #######################

const map = new Map();

map.set("id", "43857454");
map.set("token", "899993");
map.set("state_code", "1800");

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :: ${value}`);
}