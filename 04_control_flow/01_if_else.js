// If statement

/*

if(condition){

}

if(true){
    // code does execute
}

if(false){
    // code doesnot executed
}

// ex:

const isUserLoggedIn = true

if(isUserloggedIn){
    // inside code is executed if isUserloggedIn = true
}

*/


// < 
// > 
// <=
// >=
// ==
// !=
// ===
// !== 




// If else

const temprature = 41

if(temprature === 41){
    console.log("less than 41"); // less than 41
}
else{
    console.log("greater than 41");
}
console.log("exected"); // exected




const score = 200

if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`); // user power: fly
}

// console.log(`user power: ${power}`); 
// error cause it is defined inside the scope inside if condition





const balance = 1000

// if(balance>500) console.log("test"), console.log("emplicit scope");

if (balance < 500){
    console.log("less than");
} 
else if(balance < 750){
    console.log("less that 750");
}
else if(balance < 900){
    console.log("less than 900")
}
else{
    console.log("greater than 900") // greater than 900
}





const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses"); // Allow to buy courses
}




const userLoggedIn2 = true
const debitCard2 = true

if (userLoggedIn2 && debitCard2 && 2==3){
    console.log("Allow to buy courses"); // Allow to buy courses
}





const userLoggedIn3 = true
const debitCard3 = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn3 && debitCard3){
//     console.log("Allow to buy courses"); // Allow to buy courses
// }

if (loggedInFromEmail || loggedInFromGoogle || 2!=12){
    console.log("user logged In"); // user logged In
}


















