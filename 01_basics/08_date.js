const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 0, 20);
// const myCreatedDate = new Date(2023, 0, 20, 18, 30, 40);
const myCreatedDate = new Date("2023-01-05");

console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


const myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());



const newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);

// console.log(newDate.toLocaleString("default", {
//     weekday: "long",
// }))