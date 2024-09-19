// run code: node 03_basics/04_iife.js

// *************  immediately invoked function Expression *************

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai() // DB CONNECTED


// or


(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED 


// first parenthesis is the definition of function and second one is for execution
// when writting two iife there must be semicolon at the end of first function


(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})(); // DB CONNECTED TWO



( () => {
    console.log(`DB CONNECTED THREE`);
})(); // DB CONNECTED THREE



( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('Raj'); // DB CONNECTED Raj






