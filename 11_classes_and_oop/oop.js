const user = {
    username: "Israfil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(`username is ${this.username}`);
    }
}

console.log(user.username);
user.getUserDetails();

console.log(this);

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}

const user1 = new User("Israfil", 12, true);
const user2 = new User("JavaScript", 11, false);

console.log(user1);
console.log(user2);