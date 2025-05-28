
const a = 100;
let b = 20;
var c = 30;

if (true) {
    const a = 10;
    let b = 5;
    var c = 300;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "israfil";

    function two() {
        const website = "Youtube";

        // console.log(username);
    }

    two();
    // console.log(website);
}

one();


if (true) {
    const username = "israfil";

    if (username === "israfil") {
        const website = "youtube";

        console.log(`${username} ${website}`);
    }

    // console.log(website);
}

// console.log(username);


// console.log(addOne(10));

function addOne(num1) {
    return num1 + 1;
}

console.log(addTwo(10));

const addTwo = function (num1) {
    return num1 + 2;
}


