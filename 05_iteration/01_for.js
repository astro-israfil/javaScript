// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("We got 5");
//     }

//     console.log(i);
// }


// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log("The number 5 is detected");
//         break;
//     }
//     console.log(i);
// }


for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("The number 5 is detected");
        continue;
    }

    console.log(i);
}
