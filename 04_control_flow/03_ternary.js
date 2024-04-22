// condition ? exprIfTrue : exprIfFalse

const age = 9;

age >= 18 ? 
    console.log("You can get a driver license") 
    : console.log(`You have to wait ${18 - age} years to get a driver license`);

const discount = age <= 10 ? 1 : 0.3;
console.log(discount);

const isLoggedIn = true;
