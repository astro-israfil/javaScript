/*

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return "encry" + this.password + this.password.charAt(0);
    }

    getUsername () {
        return this.username;
    }
}

const user1 = new User("Alyssa", "alyssa@gmail.com", "13412");
console.log(user1.encryptPassword());

*/


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


User.prototype.encryptPassword = function () {
    return "encry" + this.password + this.password.charAt(0);
}

User.prototype.getUsername = function () {
    return this.username;
}

const user = new User("israfil", "israfi@email.com", "51345");

console.log(user.encryptPassword());