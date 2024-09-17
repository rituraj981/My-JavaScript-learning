// How do you declare an array in JavaScript?
// How do you access an element in an array?
// How do you find the length of an array?
// How can you add an element to the end of an array?
// How can you remove the last element from an array?
// How can you add an element to the beginning of an array?
// How can you remove the first element from an array?
// What is the splice() method used for in arrays?
// How does the slice() method work in arrays?
// How can you find the index of an element in an array?
// How do you check if an array contains a specific element?
// How do you join all elements of an array into a string?
// How do you reverse an array?
// How do you sort an array in JavaScript?
// How do you sort an array in descending order?
// How do you iterate through all elements of an array using a for loop?
// What is the forEach() method in arrays?
// What does the map() function do in arrays?
// How does the filter() method work in arrays?
// How do you use the reduce() method in arrays?
// What is the difference between map() and forEach()?
// How do you copy an array in JavaScript?
// How do you merge two arrays in JavaScript?
// How do you check if a variable is an array?
// What does the find() method do in arrays?
// What does the findIndex() method do?
// How do you remove a specific element from an array by its value?
// How do you remove duplicate values from an array?
// How do you create an empty array in JavaScript?
// How do you fill an array with a static value?
// How do you create a multidimensional array?
// What is an associative array in JavaScript?
// How do you flatten a multidimensional array?
// How can you use the every() method in an array?
// How can you use the some() method in an array?
// What is the Array.from() method?
// What is the Array.of() method?
// What does the Array.isArray() function do?
// How can you use concat() to combine arrays?
// How do you use the includes() method for arrays?
// What does the pop() method do in arrays?
// What is the push() method in arrays?
// What is the difference between shift() and unshift()?
// How do you convert an array to a string using toString()?
// What does the copyWithin() method do?
// How can you use the keys() method in arrays?
// What does the entries() method return for arrays?
// What is the purpose of the fill() method in arrays?
// How do you create a new array from an iterable object?



// 1. What is an Array? : special variable that can hold more than one value 
// at a time, such as a list of numbers, strings, or objects.

// 2.  Creating an Array: using square brackets
let arr = [1, 2, 3];

// 3. Accessing Array Elements
console.log(arr[0]);

// 4. Array Length Property
console.log(arr.length);

// 5. Adding Elements to an Array:

// using push() - to the end
console.log(arr.push(4)) 

// unshift(0) - to the beginning
console.log(arr.unshift(0)) 

// index assignments

// 6. Removing Elements from an Array: 

// using pop(): Removes the last element of an array
console.log(arr.pop(4)) 

// splice() : Removes or replaces existing elements in an array
console.log(arr.splice(1, 2)) // removes two elements starting at index 1.

// shift() : Removes the first element of an array
arr.shift(); // Removes and returns the first element

// 7. Array Indexing : Array elements are zero-indexed, meaning the first element is at index 0.

// 8. for loop: Looping Through Arrays 
for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

// 9. forEach method: Looping Through Arrays 
arr.forEach(element => console.log(element));

// 10. slice(): Returns a portion of an array
arr.slice(1, 3) // gives a new array with elements from index 1 to 2.

// 11. indexOf(): Finding Elements in an Array using their index
arr.indexOf(3)

// includes(): Checking if Element Exists in Array 
arr.includes(3)

// sort(): sorts an array in place and returns the sorted array
arr.sort((a, b) => a - b); // Sorts numerically

// reverse(): Reversing Arrays 
arr.reverse();

// join(): joins all elements of an array into a string.
let str = arr.join(", "); // Joins elements with a comma
console.log(arr)

// split(): Splitting a String into an Array 
let str1 = "1,2,3";
let arr1 = str.split(","); // Splits the string into an array

// from() : creates a new array from an array-like or iterable object.
let arrFrom = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// map(): creates a new array by applying a function to every element in the original array.
let newArr = arr.map(x => x * 2); // Doubles each element

// filter(): creates a new array with elements that pass a test specified by a function.
let filteredArr = arr.filter(x => x > 2); // Filters elements greater than 2

// reduce(): executes a reducer function on each element of the array, resulting in a single value.
let sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum of array

// find(): returns the first element in an array that satisfies a condition.
let result = arr.find(x => x > 2); // Finds first element greater than 2

// findIndex(): returns the index of the first element that satisfies a condition.
let index = arr.findIndex(x => x > 2); // Finds index of first element greater than 2

// every() : checks if all elements in an array pass a test.
let allGreater = arr.every(x => x > 1); // Checks if all elements are greater than 1

// some() : checks if at least one element in the array passes a test.
let hasGreater = arr.some(x => x > 2); // Checks if some elements are greater than 2

// Merging Arrays:

// concat() : merge two or more arrays.
let arr3 = [1, 2, 3]
let mergedArr = arr3.concat([4, 5]); // [ 1, 2, 3, 4, 5 ]
console.log(mergedArr)

// spread operator: Merging Arrays
let merged = [...arr1, ...arr2]; // Merging arrays with spread

// flat() : creates a new array with all sub-array elements concatenated into it.
let flatArr = [1, [2, 3], [4]].flat(); // [ 1, 2, 3, 4 ]
console.log(flatArr)

// flatMap() : maps each element using a function, then flattens the result into a new array.
let arr4 = [2, [3, 4], 5, 6]
let flatMappedArr = arr4.flatMap(x => [x, x * 2]); // [ 2, 4, 3, 6, 4, 8, 5, 10, 6, 12 ]
console.log(flatMappedArr)

// isArray() : determines whether a value is an array.
console.log(Array.isArray(arr)); // true or false

// Emptying Arrays: empty an array by setting its length to 0.
arr.length = 0; // Empties the array

// Nested Arrays: arrays within arrays, useful for multidimensional data.
let matrix = [[1, 2], [3, 4]];

// Multidimensional Arrays: array of arrays, often used to represent a matrix or grid.
let matrix2 = [[1, 2], [3, 4]];
console.log(matrix2[0][1]); // Accessing element 2

// Cloning Arrays (shallow copy): 
let copy = arr.slice(); // Shallow copy
let copy2 = [...arr]; // Spread operator copy

// Cloning Arrays (deep copy)
// : A deep copy can be created for nested arrays using recursion or JSON.
// parse(JSON.stringify(arr)), though this has limitations 
// (e.g., won't work for non-serializable values like functions).
let deepCopy = JSON.parse(JSON.stringify(arr)); // Deep copy

// Arrays vs. Sets: Arrays allow duplicate values, while Sets store unique values only.
let set = new Set([1, 2, 2, 3]); // Set will remove the duplicate 2

// Spread Operator with Arrays (...): allows elements of an array to be expanded in places where multiple elements are expected.
let newArray = [...arr, 4, 5]; // Combines array elements with new ones

// Destructuring Arrays: lets you unpack values from arrays into distinct variables.
let [first, second] = arr; // Assigns first and second elements to variables

// Using Arrays in Functions (Rest parameters)
// : allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Copying Arrays with slice(): can be used to create a copy of an array by slicing it from start to end.
let arrCopy = arr.slice(); // Copies the array

// Checking for Empty Arrays: check if an array is empty by evaluating its length property.
if (arr.length === 0) {
    console.log("Array is empty");
}

// fill(): fills all elements in an array with a static value.
let filledArr = new Array(3).fill(0); // [0, 0, 0]

// keys(): returns a new Array Iterator object that contains the keys (indexes) for each index in the array.
let keys = arr.keys();

// values():returns a new Array Iterator object that contains the values for each index in the array.
let values = arr.values();

// entries(): returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entries = arr.entries();

// Performance and Optimization
// Arrays in JavaScript can have performance considerations, especially with large datasets. 
// Operations like sorting or filtering can be optimized by reducing unnecessary loops and 
// leveraging built-in methods.