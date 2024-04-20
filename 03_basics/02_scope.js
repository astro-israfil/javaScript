let a = 10;
const b = 20;
var c = 30;

if (true) {
    let a = 100; // this variable has scope of this block
    const b = 200; // this variable has scope of this block
    var c = 300; // this variable affect global scope variable
    // console.log("Inner");
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log("Outer");
// console.log(a);
// console.log(b);
// console.log(c);

// From this above experiment we could come to this conclusion that let and const have block scope but var doesn't have'; 


function one() {
    const username = "Israfil";

    function two() {
        const website = "youtube";
        console.log(username + " " + website);
    }
    two();

    // console.log(website);
}

one();

function store() {
    let a = 1;

    return function add () {
        a++;
        return a;
    }
}

const add = store(); // a = 1
console.log(add()); // a++;
console.log(add()); // a++;
console.log(add()); // a++;


console.log("result", addTwoNumbers(10, 20));  // hoisted two the top and working properly

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// console.log("result", addTwoNumbers1(20, 30)); // ReferenceError: Cannot access 'addTwoNumbers1' before initialization

const addTwoNumbers1 = function (num1, num2) {
    return num1 + num2;
}
