const numbers = [30, 20, 40, 60, 70];

let total = 0;

// numbers.forEach( function (num) {
//     console.log(num);
// } );

// numbers.forEach( (num) => console.log(num) );

numbers.forEach( (num, index, arr) => {
    // console.log(num, index, arr);
} );

numbers.forEach( (num) => {
    total = total + num;
    console.log(total);
} );