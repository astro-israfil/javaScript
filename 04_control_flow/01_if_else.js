const marks = 4;

if (marks <= 30) {
    console.log("F");
} else if (marks <= 40) {
    console.log("D");
} else if (marks <= 50) {
    console.log("C");
} else if (marks <= 60) {
    console.log("B");
} else if (marks <= 70) {
    console.log("A-");
} else if (marks <= 80) {
    console.log("A");
} else if (marks <= 100) {
    console.log("A+");
} else {
    console.log("Invalid Marks");
}


const hasDriverLicense = false;
const isPhysicallyFeet = false;

if (hasDriverLicense && isPhysicallyFeet) {
    console.log("You can drive the car.");
} else if (hasDriverLicense) {
    console.log("You can give direction to the driver.");
} else if (isPhysicallyFeet) {
    console.log("You can get a driver license.");
} else {
    console.log("Take care of yourself.");
}