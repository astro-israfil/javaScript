const testValue = {};

if (testValue) {
    console.log("The test value is truthy");
} else {
    console.log("The test value is falsy");
}

// falsy values: 0, "", false, null, undefined, -0, 0n

// Truthy values: " ", "0", "false", [], {}, -1




// nullish coalescing operator
// validate null and undefined 

const temperatureSensorOutput = 0;

const temperature = temperatureSensorOutput ?? "Sensor Error";

console.log(temperature);




// ternary operator

const age = 17;

age >= 18 ? console.log("You can have a driver license.") : console.log("You are not eligible to drive a car.");
