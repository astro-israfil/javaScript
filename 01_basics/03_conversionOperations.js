let score = "";

// console.log(typeof score);

let scoreInNumber = Number(score);

// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

// Converted to number type

// "Israfil" => NaN
// "" => 0
// "33" => 33
// true => 1; false => 0
// null => 0;
// undefined => NaN


// Converted to boolean type
let isLoggedIn = 1;

// console.log(typeof isLoggedIn);

let isLoggedInBoolean = Boolean(isLoggedIn);

// console.log(typeof isLoggedInBoolean);
// console.log(isLoggedInBoolean);

// Note::
    // 1 => true; 0 => false
    // "" => false; "Israfil" => true
    // null => false
    // undefined => false
    // NaN => false



// Converted to string
let age = 18;
console.log(typeof age);

let ageInString = String(age);

console.log(typeof ageInString);
console.log(ageInString);


//################### OPERATIONS #######################

let value = 30;

let negValue = -value;

// console.log(negValue);

// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 ** 5);
// console.log(10 / 5);
// console.log(10 % 6);

let str1 = "Israfil";
let str2 = " Mallick";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "3");

// console.log(+""); // 0
// console.log(+true); // 1

let x = 100;
let y = x++; // Postfix

// console.log(x, y);

let i = 100;
let j = ++i; // Prefix

// console.log(i, j);