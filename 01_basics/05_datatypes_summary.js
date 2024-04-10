// Primitive data types
// number, string, boolean, null, undefined, bigint, symbol;

const num1 = 30; // number
const num2 = 33.33; // number

const str = "Hello"; // string

const isLoggedIn = true; // boolean

const bigNumber = 39999999999999999n
// console.log(typeof bigNumber); // bigint

let temperatureSensorValue = null;

// console.log(typeof temperatureSensorValue); // object

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof id); // symbol

// Reference (Non Primitive)
// array, objects, function

const languages = ["JavaScript", "Python", "C#"]; // array (object)

const user = {
    name: "Israfil",
    age: 20
};

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

console.log(typeof languages); // object
console.log(typeof user); // object
console.log(typeof calcAge); // function