// 04_Nullish_Terniary.js


// Nullish Coalescing Operator(??): null undefined

// syntax ---> let result = leftOperand ?? rightOperand;

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 15 // 10
console.log(val1);


// example: basic usage

let name = null;
let defaultName = "Anonymous";

let displayName = name ?? defaultName;

console.log(displayName); // "Anonymous"


// example: Handling undefined

let age;
let defaultAge = 18;

let userAge = age ?? defaultAge;

console.log(userAge); // 18


// The key difference between ?? and the logical OR (||) operator is that ?? only checks for 
// null or undefined, whereas || considers falsy values like 0, '', false, etc.

let count = 0;

let result1 = count ?? 10; // 0
let result2 = count || 10; // 10

console.log(result1); // 0
console.log(result2); // 10

// In the first case (??), count is 0 (which is not null or undefined), so it returns 0.
// In the second case (||), 0 is falsy, so it returns 10 instead.




// **********************************************************


// Terniary Operator

/*

syntax ---/
condition ? true : false 
condition ? expressionIfTrue : expressionIfFalse;

- condition: The condition to be evaluated (returns true or false).
- expressionIfTrue: The expression executed if the condition is true.
- expressionIfFalse: The expression executed if the condition is false.

*/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80") // more than 80]


// Example 1: Basic Usage

// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";

// console.log(canVote); // "Yes"



// Example 2: Simple Inline Decision

// let number = 10;
// let result = (number % 2 === 0) ? "Even" : "Odd";

// console.log(result); // "Even"



// Example: Equivalent if-else Block:

// The ternary operator is just a compact form of if-else. 
// The above example could be written using an if-else statement like this:
let number = 10;
let result;

if (number % 2 === 0) {
  result = "Even";
} else {
  result = "Odd";
}

console.log(result); // "Even"
