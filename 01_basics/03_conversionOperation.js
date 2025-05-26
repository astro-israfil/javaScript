const score = "            ";

const scoreInNumber = Number(score);

// console.log(typeof scoreInNumber, scoreInNumber);

// "" => 0, " " => 0
// "33" => 33
// "333abc" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0


const isLoggedIn = null;

const isLoggedInAsBoolean = Boolean(isLoggedIn);

// console.log(typeof isLoggedInAsBoolean, isLoggedInAsBoolean);

// 1 => true; 0 => false;
// "" => false; " " => true;
// null => false; undefined => false;


const myValue = undefined;
const myValueAsString = String(myValue);
// console.log(typeof myValueAsString, myValueAsString);



// ===================== Operations ========================

// basic arithmetic operations
// console.log(2 + 1)
// console.log(2 - 1)
// console.log(2 * 1)
// console.log(10 / 5)
// console.log(2 ** 3)
// console.log(5 % 2)

const firstName = "Israfil";
const lastName = "Mallick";

const fullName = firstName + " " + lastName;
// console.log(fullName);


console.log(1 + 2 + "2");
console.log("2" + 1 + 2);


// Bad programmer experience
// let num1, num2, num3;
// num1 = num2 = num3 = 10;

// console.log({ num1, num2, num3 });

// Bad programmer experience
// console.log(+true);
// console.log(+"");



// prefix and postfix
let a = 5;
let b = 10;

let x = ++a; // assignment after increament
let y = b++; // assignment before increament

console.log({ a, b, x, y });