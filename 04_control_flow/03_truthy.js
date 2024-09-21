
// falsy values

// false, 0, -0, BigInt On, "", null, undefined, NaN (not a number)

// Truthy values

// True, "0", 'false', " ", [], {}, function(){}

// false == 0 // true
// false == '' // true
// 0 == '' // true


const userEmail = "raj@gmail.com"

if(userEmail){
    console.log("Got user email"); // Got user email
}else{
    console.log("Donnot have any");
}



const userEmail2 = {}

if(userEmail2){
    console.log("Got user email"); // Got user email
}else{
    console.log("Donnot have any");
}




const userEmail3 = []

if(userEmail3.length === 0){
    console.log("Array is empty"); // Array is empty
}else{
    console.log("Array is not empty");
}




const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); // Object is empty
}





