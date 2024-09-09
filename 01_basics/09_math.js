// run code in terminal: node 01_basics/09_math

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.min(4, 5, 7, 9, 8)); // 4
console.log(Math.max(4, 5, 7, 9, 8)); // 9


console.log(Math.random()); // value will be between 0 and 1
console.log((Math.random()*10)+1); // value will be between 1 and 9
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
Math.random(Math.floor(Math.random()*(max - min + 1)) + min);
