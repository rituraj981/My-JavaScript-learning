// ********************* String *******************


// Ways to create string

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`; // new type

// const string4 = new String("A String object"); // new type


/*  
    When String() is called as a function (without new), 
    it returns value coerced to a string primitive. Specially, 
    Symbol values are converted to "Symbol(description)", where 
    description is the description of the Symbol, instead of 
    throwing.
    ex: const name = "raj"; // raj
*/

/*  
    When String() is called as a constructor (with new), 
    it coerces value to a string primitive (without special 
    symbol handling) and returns a wrapping String object, 
    which is not a primitive.
    ex: const gameName = new String('Raj') // Raj
*/


/* 
    String primitives and String objects also give 
    different results when using eval().
*/
// const s1 = "2 + 2"; // creates a string primitive
// console.log(eval(s1)); // returns the number 4

// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s2)); // returns the string "2 + 2"

// console.log(eval(s2.valueOf())); // returns the number 4


// *******************************************************
// *******************************************************


// String Methods/operations: 

// console.log(gameName[0]); // R
// console.log(gameName.__proto__); // {}
// console.log(gameName.length); // 3
// console.log(gameName.toUpperCase()); // RAj
// console.log(gameName.charAt(2));  // j
// console.log(gameName.indexOf('t')); // -1
// console.log(gameName.indexOf('a')); // 1

// "Hello" + "World" => Hello world


// Two ways to access an individual character in a string.

// The first is the charAt() method:
// console.log("cat".charAt(1)); //  "a"

/* 
    The other way is to treat the string as an array-like object, 
    where individual characters correspond to a numerical index: 
*/
// console.log("cat"[1]); //  "a"


const Name1 = new String('Rituraj');
const newname1 = Name1.substring(0, 3);
console.log(newname1); // Rit

const newname2 = Name1.slice(-7, 4);
console.log(newname2); // Ritu

const newname3 = Name1.slice(-3);
console.log(newname3); // raj

const Name2 = "    Raj   "
console.log(Name2); // "    Raj   "
console.log(Name2.trim()); // "Raj"

const weburl = "https://raj.com/40pandey"
console.log(weburl.replace('40','-'));

console.log(weburl.includes('raj'));

const stringname = ("Ritu-raj-pandey")
console.log(stringname.split)


// *******************************************************
// *******************************************************


// const name = "Raj";
// const repoCount = 40;
// outdated version of writting syntax
// console.log(name + repoCount + "value"); // Raj 40 value
// modern way of writting syntax "string"
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);