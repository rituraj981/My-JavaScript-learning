// run following code using following command:
// node /workspaces/JS-by-chai_aur_Code/02_basics/03_0bjects.js


// 1.singleton: if you use constructor to create object it 
//              will always be singleton object(its own type one object)

Object.create // using constructor object created

// 2. Non-singleton object / object leterals

const JsUser = {} // object created 

// declaring symbol
const mySym = Symbol("key1") 

const JsUser1 = {
    name: "Rituraj",
    "full name": "Rituraj Pandey", 
//  mySym: "mykey1", // not right way to use symbol as key inside object
    [mySym]: "mykey1", // right way to use symbol as key inside  object
    age: 18,
    location: "Jaipur",
    email: "ritu439@gmail.com",
    isLocation: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*

// 1. calling object
console.log(JsUser1.email) // ritu439@gmail.com

// problem with first calling object method
// console.log(JsUser1."full name") // error

// 2. better than first one
console.log(JsUser1["full name"]) // Rituraj Pandey

// console.log(typeof JsUser1.mySym) // string type key
console.log(JsUser1[mySym]) // mykey1
console.log(typeof JsUser1[mySym]) // symbol type key


// change previous gmail to new
JsUser1.email = "raj981@gmail.com" 
console.log(JsUser1["email"]) // raj981@gmail.com

// lock user so that their value can't be changed
Object.freeze(JsUser1)
JsUser1.email = "raj771@gpt.com" 
console.log(JsUser1["email"]) // raj981@gmail.com

console.log(JsUser1);
// output:
// {
//   name: 'Rituraj',
//   'full name': 'Rituraj Pandey',
//   age: 18,
//   location: 'Jaipur',
//   email: 'raj981@gmail.com',
//   isLocation: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

*/


//

JsUser1.greeting = function(){
    console.log("Hi Js User1");
}

console.log(JsUser1.greeting); // [Function (anonymous)]
console.log(JsUser1.greeting()); // output:
// Hi Js User1
// undefined

JsUser1.greetingTwo = function(){
    console.log(`Hi Js User1, ${this.name}`);
}

console.log(JsUser1.greetingTwo()); // output:
// Hi Js User1, Rituraj
// undefined
