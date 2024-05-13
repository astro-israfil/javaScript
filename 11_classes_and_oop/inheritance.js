class User {
    constructor(username) {
        this.username = username;
    }

    getUserDetails () {
        console.log(`This is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        console.log(this.password + "abc");
    }
}


const user = new Teacher("israfil", "israfil@gmail.com", "4234");
user.getUserDetails();