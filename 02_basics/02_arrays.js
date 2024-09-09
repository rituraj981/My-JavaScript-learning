// run command: node 02_basics/02_arrays.js 


const Marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// push() : Appends new elements to the end of an array, and returns the new length of the array.

// Marvel_heros.push(dc_heros) // adds dc_heros inside marvel_heros array
// console.log(Marvel_heros);  // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]
// console.log(Marvel_heros[3]); // [ 'Superman', 'flash', 'batman' ]
// console.log(Marvel_heros[3][1]); // flash



// concate() : Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const allHeros = Marvel_heros.concat(dc_heros) 
// console.log(allHeros); // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]



// spread() : Adds multiple arrays

// const indian_heros = ["Saktiman", "Krish", "Naagraj"]

// const all_new_heros = [...Marvel_heros, ...dc_heros, ...indian_heros]
// console.log(all_new_heros)

// [
//     'thor',      'Ironman',
//     'Spiderman', 'Superman',
//     'flash',     'batman',
//     'Saktiman',  'Krish',
//     'Naagraj'
// ]





