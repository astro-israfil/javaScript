// Datatypes

// Primitives datatypes are:
// number, string, boolean, null, undefined, bigInt, symbol

const score = 3243;
const name = "Israfil";
const isStudent = true;
const temperature = null;
let state;

console.log(typeof state);

const views = 334434545465665334n;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof anotherId);


// Reference Types or Non-Primitive types
// object, array, function

const fruits = ["Mango", "Apple", "Banana", "Chery", "Litchi"];

console.log(typeof fruits);

const person = {
    name: "John",
    age: 23,
}

console.log(typeof person);

const greeting = function () {
    console.log("Hello World!");
}

console.log(typeof greeting);
