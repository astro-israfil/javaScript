// singleton
// Object.create 


// literals

const secretId = Symbol("secret_key");

const user = {
    name: "Israfil",
    "full Name": "Israfil Mallick",
    [secretId]: 2324235353,
    email: "israfil@google.com",
    age: 23,
    isLoggedIn: true,
    lastLoggedInDays: ["Sunday", "Wednesday", "Friday"],
}


console.log(user.name);

user.email = "israfil@twitter.com";

console.log(user.email);
console.log(user["full Name"]);

// Object.freeze(user);

user.email = "israfil@microsoft.com";
console.log(user.email);

console.log(user);


user.greeting = function () {
    console.log("Hello JS user");
};

user.greeting();

user.greetingUser = function () {
    console.log(`Hello JS user, ${this.name}`);
}

user.greetingUser();