/// Function

function sayHello() {
    console.log("Hello world");
}

// sayHello();


function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
    return number1 + number2;
}

// console.log(addTwoNumbers(10, 20));

const result = addTwoNumbers(10, 20);

console.log(result);


function displayLoggedInMassege(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`;
}

console.log(displayLoggedInMassege("Israfil"));
console.log(displayLoggedInMassege(""));