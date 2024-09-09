let score = 33
let score2 = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" convert => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true



let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn2); // false


let isLoggedIn3 = "Raj"

let booleanIsLoggedIn3 = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn3); // true


// 1 => true; 0 => false
// "" => false
// "Raj" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

console.log(+true); // 1
console.log(+""); // 0


// ***************** Prefix & Postfix *****************

// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // x:4, y:3

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); // a:4, b:4