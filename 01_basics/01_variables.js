const accountID = 144553
let accountEmail = "raj@gmail.com"
var accountpassword = "123"  
// Prefer not to use var cause of issue in block scope and functional scope      

accountcity = "jaipur"
let accountState; // undefined

// accountID = 2  // not allowed

console.log(accountID); // shows accountID in terminal

// ouput the required data in tabel format
console.table([accountID, accountEmail, accountpassword, accountcity, accountState])