const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function (item) {
    console.log(item);
});

numbers.forEach((item, index, arr) => {
    console.log(item, index, arr);
});