const user = {
    username: "@israfil",
    firstName: "Israfil",
    lastName: "Mallick",
    _id: "4674568",
    age: 22,
}


for (const key in user) {
    // console.log(`${key} :: ${user[key]}`);
}

const userFirstName = user.firstName;

for (const index in userFirstName) {
    // console.log(`each charecter : ${userFirstName[index]}`);
}

const friends = ["Muhammad", "Abdullah", "Musa", "Ebrahim"];

for (const index in friends) {
    console.log(friends[index]);
}