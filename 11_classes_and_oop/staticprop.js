class User {
    constructor(username) {
        this.username = username;
    }

    getUserDetails () {
        console.log(this.username);
    }

    static userId () {
        return "123";
    }
}

const user = new User("israfil");
// console.log(user.userId());

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    course () {
        console.log("JavaScript 0 - 101");
    }
}

const teacher = new Teacher("Musa", "musa@gmail.com", "23134");

teacher.getUserDetails();
// console.log(teacher.userId())