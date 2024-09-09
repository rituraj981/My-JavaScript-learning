/*1.JavaScript arrays are resizable and can contain a mix of different data types.
  2.JavaScript arrays must be accessed using nonnegative integers 
    (or their respective string form) as indexes.
  3.JavaScript arrays are zero-indexed: the first element of an array
    is at index 0, the second is at index 1, and so on — and the last 
    element is at the value of the array's length property minus 1.
  4.JavaScript array-copy operations create shallow copies. 
    (All standard built-in copy operations with any JavaScript 
    objects create shallow copies, rather than deep copies).

    Shallow copies: A shallow copy of an object is a copy whose properties share the same references.
    deep copies: A deep copy of an object is a copy whose properties do not share the same references
*/


// get output: node 02_basics/01_arrays


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // 1


// Array methods


// 1. push() = Add element in the last of Array

myArr.push(6)
console.log(myArr);
/*[
  0, 1, 2, 3,
  4, 5, 6
]*/

// 2. pop() = remove element in the last of Array

myArr.pop() 
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// 3. unshift() = Add element at the start of Array

myArr.unshift(9) 
console.log(myArr);
/*
[
  9, 0, 1, 2,
  3, 4, 5
]
*/

// 4. shift() = Remove first element

myArr.shift() 
console.log(myArr); // [0, 1, 2, 3, 4, 5]

// 5. includes() = if perticular element is in the array or not

console.log(myArr.includes(9)); // false

// 6. indexOf() = index of perticular element in the array

console.log(myArr.indexOf(3)); // 3 (in 4th index)
console.log(myArr.indexOf(3)); // -1 (cause value does't exists)

// 7. join() = Adds all the elements of an array into a string

const newArr = myArr.join() 
console.log(myArr); // [ 0, 1, 2, 3, 4, 5]
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string

// 8. slice() = Returns a copy of a section of an array (do not manipulates orignal array)
// 9. splice() = Removes given range of elements from orignal array (manipulates orignal array)

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 1, 2, 3 ]
console.log("c", myArr); // c [ 0, 4, 5 ]






