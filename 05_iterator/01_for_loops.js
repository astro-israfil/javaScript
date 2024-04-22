for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

const friends = ["Abdullah", "IBN Firnas", "OMAR", "MUSA"];

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        if (j === 10) {
            console.log("###########");
        }
    }
}

const numbers = [10, 20, 15, 30, 25, 5, 35, 40, 50];


for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num === 5) {
        // console.log("GOT the number 5");
        break;
    }

    // console.log(num);
}

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num === 5) {
        console.log("GOT the number 5");
        continue;
    }

    console.log(num);
}