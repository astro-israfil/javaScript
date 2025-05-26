const accountId = 234345;
let accountEmail = "israfil@google.com";
var accountPassword = "123";
accountCity = "Manikganj";


// accountId = 2132;  // TypeError: Assignment to constant variable.
accountEmail = "israfil@twitter.com";
accountPassword = "12345";
accountCity = "Dhaka";

console.log(accountId);
console.log({ accountId, accountEmail, accountPassword, accountCity });

// NOTE: not prefer to use var because issues in block and functional scope