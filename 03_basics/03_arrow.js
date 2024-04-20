// Study this keyword

// "use strict";

const user = {
    username: "Israfil",
    age: 20,
    friendsCount: 200,
    welcomeMessage: function () {
        console.log(`Welcome to iterpreter, ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage();

// console.log(this);

function myFunction() {
    console.log(this);
}

// myFunction();

const myFunctionExpression = function () {
    console.log(this);
}

// myFunctionExpression();

// this keyword in arrow function
const myArrowFunction = () => {
    console.log(this);
}

myArrowFunction();


// learn deepth of an arrow function 

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// };

const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(10, 30));

const getObject = (username, age) => ({username, age});
console.log(getObject("Israfil", 20));