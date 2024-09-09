const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance);   // [Number: 100]

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(1)); // 100.0


const Number2 = 23.8966
console.log(Number2.toPrecision(2)); // 24
console.log(Number2.toPrecision(3)); // 23.9

const Number3 = 123.8966
console.log(Number3.toPrecision(3)); // 124

const Number4 = 1123.8966
console.log(Number4.toPrecision(3)); // 1.12e+3



const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
