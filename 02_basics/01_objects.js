// singleton
// Object.create

const secretKey = Symbol("123");

// object literals
const user = {
    name: "Israfil",
    "full name": "Israfil Mallick",
    age: 22,
    email: "israfil@microsoft.com",
    isLoggedIn: true,
    [secretKey]: "mykey123",
};

console.log(user.name);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[secretKey]);


user.email = "israfil@chatgpt.com";

// Object.freeze(user);


user.greeting = function () {
    console.log("Hello user");
}

user.greeting1 = function () {
    console.log(`Hello user: ${this.name}`);
}

console.log(user.greeting);

// user.greeting();
// user.greeting1();

console.log(user);
