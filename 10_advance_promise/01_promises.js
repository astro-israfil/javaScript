// Creating Promise
const promiseOne = new Promise(function (resolve, reject) {
    // Time consuming task
    // DB calls, cryptography, networks
    setTimeout(function () {
        console.log("time consuming task complete successfully");
        resolve();
    }, 1000);
})


// Consuming Promise
promiseOne.then(function () {
    console.log("promise completed 1");
});


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Time consuming task complete 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("promise completed 2");
});


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Time consuming task complete 3");
        resolve({username: "israfil", password: "xyz123"});
    }, 1000);
});

promiseThree.then(function (response) {
    console.log(response);
});

// console.log("Hello world");


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = false;
        
        if (!error) {
            console.log("Time consuming task complete 4");
            resolve({username: "asto-israfil", password: "xyz123"});
        } else {
            reject("Error: something went wrong!");
        }
    }, 1000);
});

promiseFour.then(function (response) {
    console.log(response);
    return response.username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Promise Four end");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true;
        if (!error) {
            console.log("Time consuming task complete 5");
            resolve({username: "harry potter", password: "xyz123"});
        } else {
            reject("Error: something went wrong");
        }
    }, 1000);
});


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function fetchUserData() {
//     try {
//         const response = await fetch("https://api.github.com/users/astro-israfil");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// fetchUserData();

fetch("https://api.github.com/users/astro-israfil")
    .then(function (response) {
        return response.json();
    })
    .then(function (user) {
        console.log(user);
    })
    .catch(function (error) {
        console.log(error);
    })