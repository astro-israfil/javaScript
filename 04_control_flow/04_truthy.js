const email = 0;

if (email) {
    console.log('Got user email', email);
} else {
    console.log('User email not found');
}


// Falsy value::
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// Truthy value::
// "0", "false", " ", [], {}, function(){}

// array checking
const usersArray = [];

if (usersArray.length === 0) {
    console.log(`usersArray is empty`);
}

const userObject = {};

if (Object.keys(userObject).length === 0) {
    console.log('userObject is empty');
}


// Nullish Coalescing Operator // ?? ( handle null and undefined )
const cartQuantity = 0;

// const result = cartQuantity || "cart quantity not found";
const result = cartQuantity ?? "cart quantity not found";

console.log("cart quantity :", result);