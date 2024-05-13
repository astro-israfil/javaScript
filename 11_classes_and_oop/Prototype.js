const myName = "Israfil              ";
// console.log(myName.trueLength())

String.prototype.trueLength = function () {
    return this.trim().length;
}

console.log(myName.trueLength());

const fruitList = ["Mango", "Banana"];

const user = {
    username: "israfil",
    age: 21,

    getUserDetails: function () {
        console.log(`username is ${this.username}`);
    }
};

Object.prototype.israfil = function () {
    console.log(`Israfil is present in all the object in javaScript`);
}

// fruitList.israfil();
// user.israfil();

Array.prototype.heyIsrafil = function () {
    console.log(`Hello Israfil`);
}

// fruitList.heyIsrafil();
// user.heyIsrafil();

const man = {
    name: "israfil",
    email: "israfil@abc.com"
};

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = man

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
