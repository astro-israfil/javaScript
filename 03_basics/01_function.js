function greeting() {
    console.log("Hello World");
}

greeting();


function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 20));

function loggedInMessage(username) {
    if (username && typeof username == "string") {
        return `${username} just logged in.`;
    } else {
        return "User just logged in.";
    }
}

console.log(loggedInMessage("israfil"));
console.log(loggedInMessage());