function setUserName(username) {
    this.username = username;
}

// const setUserName = (username) => {
//     this.username = username;
// }

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Israfil", "israfil@gmail.com", "13w3423");
console.log(user);