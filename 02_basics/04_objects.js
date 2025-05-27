// Singleton
// const tinderUser = new Object();

const tinderUser = {};

// console.log(tinderUser);

const user = {
    username: "israfil",
    // fullName: {
    //     firstName: "Israfil",
    //     lastName: "Mallick",
    // },
    email: {
        primary_email: "israfil@google.com",
        secondary_email: "israfil@microsoft.com",
    },
    age: 23,
    isLoggedIn: true,
}


// console.log(user.fullName?.firstName);
// console.log(user.email?.primary_email);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const target = {};

const obj3 = Object.assign(target, obj1, obj2);

// console.log(obj3);
// console.log(obj3 === target);

const userPersonalDetails = {
    name: "John",
    age: 30,
    height: 5.7,
};

const userProfessionalDetails = {
    profession: "Software Eng.",
    employed: true,
    company: "example.com",
}

const userDetails = { ...userPersonalDetails, ...userProfessionalDetails };
// console.log(userDetails);


console.log(user.hasOwnProperty("email"));