const name = "Israfil";
const repoCount = 50;

console.log(`Hello ${name}, you have ${repoCount} repositories in your github.`);

const gameName = new String("Israfil-Fc");

console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName[1]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("f"));
console.log(gameName.split("-"));




const myString = "Mozilla";

let partOfMyString = myString.substring(1, 3);
console.log(partOfMyString);

partOfMyString = myString.substring(2);
console.log(partOfMyString);



partOfMyString = myString.slice(2);
console.log(partOfMyString);

partOfMyString = myString.slice(1, 3);
console.log(partOfMyString);

partOfMyString = myString.slice(-6, -1);
console.log(partOfMyString);


const userInputField = "     Israfil Mallick         ";

console.log(userInputField);
console.log(userInputField.trim());

const url = "https://israfil.io/ai%20editor";

console.log(url.replace("%20", "-"));
