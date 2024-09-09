
// Flat() : all array under array will become one

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const flat_all_array = another_array.flat(Infinity) // there can be a depth in place of infinity
// console.log(flat_all_array);

// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
// ]


// Array.isArray() 
// Array.from() : convert into array / Creates an array from an iterable object.

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Hitesh"})); // empty string

// Array.of() :

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
// [ 100, 200, 300, 400 ]
