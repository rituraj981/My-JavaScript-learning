// run code: node 03_basics/03_arrowfn.js


/*
 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // this keyword refers to current context/values means 
        // inside that perticular function in which it is 
        console.log(this) // hitesh, welcome to website
    }
}

user.welcomeMessage()
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//  }

user.username = "sam" // sam, welcome to website

user.welcomeMessage()
// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

*/



// function chai() {
//     let username = "Raj"
//     console.log(this.username);
// }

// chai() // undefined



// const chai = function () {
//     let username = "Raj"
//     console.log(this.username);
// }

// chai() // undefined



// const chai =  () => {
//     let username = "Raj"
//     console.log(this.username);
// }

// chai() // undefined



// const chai =  () => {
//     let username = "Raj"
//     console.log(this);
// }

// chai() // {}



// **************** Arrow function *****************


// if wrraped in curlybrces you need to write retun keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}


// if wrraped in paranthesis there is no need to write retun keyword
const addTwo2 = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4)) // 7
console.log(addTwo2(3, 4)) // 7


// To return object
const addTwo3 = (num1, num2) => ({username: "Raj"})

console.log(addTwo3(3, 4)) // { username: 'Raj' }


























