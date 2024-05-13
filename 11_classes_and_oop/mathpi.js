console.log(Math.PI);
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const user = {
    name: "Israfil",
    email: "israfil@microsoft.com",
    _id: 32432,
}

const propertyMode = Object.getOwnPropertyDescriptor(user, "_id");
console.log(propertyMode);

Object.defineProperty(user, "_id", {
    writable: false,
    enumerable: false,
    configurable: false
});

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} ==> ${value}`);
}