/// STRING
const myName = "Israfil";
// console.log(typeof myName); // string

const repoCount = 25;

// console.log(myName + " has " + repoCount + " repository on github");

// String interpolation
// console.log(`${myName} has ${repoCount} repository on github`);


// String constructor to make a string object

const newString = new String("Computer Code");

// console.log(typeof newString); // object
// console.log(newString.__proto__);

// console.log(newString[0]);
// console.log(newString.length);

const words = newString.split(" ");
console.log(words[1]);

const userName = "Israfil Mallick";

// console.log(userName.includes("Israfil"));
// console.log(userName.charAt(6));
// console.log(userName.indexOf("fil"));

const lowerCaseUserName = userName.toLowerCase();
console.log(lowerCaseUserName);

console.log(lowerCaseUserName.replace(" ", "-"));
console.log(lowerCaseUserName.indexOf("fil"));

console.log(lowerCaseUserName.slice(0, 8));
console.log(lowerCaseUserName.slice(-12, -3));

console.log(lowerCaseUserName.substring(6, 13));

const randomInput = "      Israfil         ";
console.log(randomInput);
console.log(randomInput.trim());