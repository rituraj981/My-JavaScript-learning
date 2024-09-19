/*
SCOPE: curly bracket is the scope of any properties inside block

1. Global scope
2. Block scope

*/

// var c = 300 // global scope

// if(true){
//     let a = 10    //
//     const b = 20  // Block scope
//     var c = 30    //
// }

// // console.log(a) // error
// // console.log(b) // error
// console.log(c) // 30

/* 
we do not use var cause of above type of problem 
even if declare variable inside a scope var disturbs outside codes
so better to use let and const
*/


// let c = 300 

// if(true){
//     let a = 10    
//     const b = 20  
//     console.log("INNER: ", a); // INNER:  10
// }

// console.log(c) // 300




// global, block scope:

function one(){
    const username = "Raj"

    function two(){
        const website = "Youtube"
        console.log(username); // Raj
    }
    // console.log(website) // error

    two()
}

one()

/*
in above code when we execute one() it calls the function
one() then it goes inside and we get error of console.log(website)
cause it is inside two() function and we are trying to access block
scope in global scope that is not possible after commenting out 
console.log(website)

again we call one() now it calls the function one() then it goes 
inside and we get two() and calls functio two() and inside the
function console.log(username) runs and prints "Raj" cause block scope 
can access global

in summary: "Closer"
when there are nested functions only child can access
parents propertise but parent cannot access childs propertise
*/



if(true){ 
    const username = "Raj"
    if(username === "Raj"){
        const website = " Youtube"
        console.log(username + website); // Raj Youtube
    }
    // console.log(website); // error
}

// console.log(username); // error




// with this syntax function can be accessed before it's declaration
addone(5)
function addone(num){
    return num + 1 
}


// with this syntax function can only be accessed after it's declaration
const addTwo = function(num){
    return num + 2
}
addTwo(5)



















