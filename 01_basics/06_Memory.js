
// ********************* Memory *******************


// Stack ex:

let myname = "Raj"

let fullname = myname
fullname = "Rituraj"

console.log(fullname); // Raj
console.log(fullname); // Rituraj



// Heap (we do the changes in actual value) 
// ex:

let user = {
    email: "ritu43900@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raj@gmail.com"

console.log(userOne.email); // raj@gmail.com
console.log(userTwo.email); // raj@gmail.com



// The stack is used for static memory allocation, 
// The heap is used for dynamic memory allocation.

// Static memory allocation means that the size and location 
// of the memory is fixed at compile time, 
// while dynamic memory allocation means that the size and 
// location of the memory can change at runtime.

// In JavaScript, primitive values (such as numbers, strings, 
// booleans, etc.) are stored in the stack, 
// while objects(such as arrays, functions, etc.) are stored in the heap.

// Primitive values are immutable and have a fixed size, 
// so they can be easily stored and accessed in the stack. 

// Objects are mutable and have a variable size, so they need 
// to be stored and accessed in the heap, which is more flexible 
// but also slower.