// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// While doing comparison, there must be same data type of both
// console.log("2" > 1);
// console.log("02" > 1);


// Avoid following type of comparisons cause of confusion problem
// here null is converted to 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


// "===" strictly check value as well as datatype

console.log("2" === 2); // it doesn't run