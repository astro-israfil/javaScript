/// Function

function sayHello() {
    console.log("Hello world");
}

// sayHello();


function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
    return number1 + number2;
}

// console.log(addTwoNumbers(10, 20));

const result = addTwoNumbers(10, 20);

// console.log(result);


function displayLoggedInMassege(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`;
}

// console.log(displayLoggedInMassege("Israfil"));
// console.log(displayLoggedInMassege(""));


// rest operator ...nums1 ==> pack all arguments in an array;
function calculateCart(num1, num2, ...nums) {
    console.log(num1, num2);
    return nums;
}

console.log(calculateCart(10));

console.log(calculateCart(100, 200, 300));
console.log(calculateCart(100, 200, 300, 400));


function handleObject({username, cartItem, price}) {
    console.log(`${username} has ${cartItem} products, total price is ${price}`);
}

handleObject({
    username: "Israfil",
    cartItem: 20,
    price: 1000,
});