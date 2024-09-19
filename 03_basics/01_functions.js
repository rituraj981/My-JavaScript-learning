// run codes: node 03_basics/01_functions.js


// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("J");
// }

// sayMyName()



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // 7



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "4") // 34



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "a") // 3a



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5) // 8
// console.log("Result: ", result); // Result:  undefined



// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); // Result:  8




// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("@Raj")) // @Raj just logged in




// ************ if username not given by user ************
// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage()) // undefined just logged in




// ************ using condition for username check ************
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())
// // Please enter a username
// // undefined




// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())
// // Please enter a username
// // undefined



// ****************************************************
// ***** Passing parameters / predefined argument *****
// ****************************************************


// ****** even if username not provided by user ******

// function loginUserMessage(username = "someone"){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage()) // someone just logged in




// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400)) // [ 200, 400 ]




// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 600)) // [ 500, 600 ]
//  here val1 holds 200 and val2 holds 400 and rest is in an array 




// ******* Passing object in a function *******

// const user = {
//     username: "Raj",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// // handleObject(user) // username is Raj and price is 199




// direct passing object:

handleObject({
    username: "sam",
    price: 399
}) // username is sam and price is 399



// ******* Passing Array in a function *******

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 100, 600])); // 400



















