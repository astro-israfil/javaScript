/// Date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

const timestamp = myDate.getTime();
console.log(timestamp);

const registrationTime = new Date('2020-01-23').getTime();
const timePastFromRegistration = Math.floor(((timestamp - registrationTime) / (1000 * 60 * 60 * 24)) / 365) + " years";
console.log(timePastFromRegistration);

const myCreatedDate = Date.now();
console.log(myCreatedDate); // time in milliseconds has been past since 1970 jan 1 00:00:00

console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1);