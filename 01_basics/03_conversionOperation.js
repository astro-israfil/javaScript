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

console.log(typeof isLoggedInAsBoolean, isLoggedInAsBoolean);

// 1 => true; 0 => false;
// "" => false; " " => true;
// null => false; undefined => false;


const myValue = undefined;
const myValueAsString = String(myValue);
console.log(typeof myValueAsString, myValueAsString);
