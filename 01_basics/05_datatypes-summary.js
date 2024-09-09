/* JavaScript is a dynamic language and not static, 
   which means that variables can hold values of different 
   types during runtime. Unlike languages such as Typescript
   or Java, you don't need to declare the data type of a variable explicitly.
*/

// Primitive

// 1. String
// 2. Number
// 3. Boolean
// 4. Null

const temp = null
console.log(temp);

// 5. undefined

let userEmail;
console.log(userEmail); // undefined

// 6. symbol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false

// 7. bigint

const bigNumber = 7612936148732462764n

// Reference (Non Primitive)

// 1. Array

const heros = ["saktiman", "naagraj", "doga"]

// 2. Objects

let myObj = {
   name: "raj",
   age: 23,
}

// 3. Functions

const myfunction = function(){
   console.log("Hello world");
}





// datatype of the data in variable

let num = 45;
console.log(typeof num);

// Undefined - undefined
// Null - Object
// Boolean - boolean
// Number - number
// String - string
// function - function(object function)
// object - object (function object)
// symbol - symbol







