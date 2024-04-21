const user = {
    username: "Israfil",
    age: 16,
    cartItems: 20,
    cartPrice: 300,
    isLoggedIn: false,

    getLoggedIn: function () {
        this.isLoggedIn = true;
        console.log("User logged in successfully");
    }
};

user.getLoggedIn();

// if (user.isLoggedIn) {
//     console.log("Welcome to ON BOARD");
// } else {
//     console.log("Please log in or register");
// }


// if (user.isLoggedIn && user.age >= 18) {
//     console.log("You can get a driving license");
// } else {
//     console.log("You can't get a driving license");
// }


if (user.age >= 18) {
    console.log("You can get a driving license");
} else if (user.age === 17) {
    console.log("You can drive but can't get a driving license");
} else {
    console.log(`You have to wait for ${18 - user.age} years, to get a driving license`);
}