"use strict";

const user = {
    username: "israfil",
    email: "israfil@google.com",
    course: "JavaScript Development",
    price: 999,

    greeting: function () {
        console.log(`Hello ${this.username}, welcome to the course, ${this.course}`);
    }
}

user.greeting();


// __________________________ this keyword or current context ____________________

console.log("global context", this);

function contextTestFunction() {
    console.log("context inside the regular function", this);
}
contextTestFunction();



const contextTestArrowFunction = () => {
    console.log("context inside the arrow function", this);
}
contextTestArrowFunction();



// _________________ Arrow function _______________________

// const addNums = (num1, num2) => {
//     return num1 + num2;
// }

const addNums = (num1, num2) => num1 + num2;

console.log(addNums(10, 20));

const sendUserData = (username, email, age) => ({ username, email, age });

console.log(sendUserData("israfil", "israfil@google.com", 23));