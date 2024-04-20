const tinderUser = new Object();
tinderUser.name = "Israfil";
tinderUser.email = "israfil@gmail.com";
tinderUser.age = 20;
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const user = {
    name: "Israfil",
    fullname: {
        firstName: "Israfil",
        lastName: "Mallick",
    },
};

console.log(user.fullname.firstName);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};


console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("profession"));


// Object destructuring

const student = {
    name: "Israfil",
    age: 20,
    group: "Science",
    mejor: "Electronics"
};

// console.log(student.name);

const { name: studentName, age, group, mejor: subject } = student; // Object destructuring

console.log(studentName, age, group, subject);