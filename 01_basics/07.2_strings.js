let str1 = "Hello, World!";
console.log(str1.length); // 13

let str2 = "Hello";
console.log(str2.charAt(1)); // "e"

// 3. charCodeAt(index): Returns the Unicode of the character at the specified index.

let str3 = "Hello";
console.log(str3.charCodeAt(0)); // 72

// 4. concat(str1, str2, ...): Concatenates (joins) two or more strings.

let str4 = "Hello";
let str42 = "World";
console.log(str4.concat(" ", str42)); // "Hello World"

// 5. includes(searchString, position): Checks if a string contains another string, returning true or false.

let str5 = "Hello, World!";
console.log(str5.includes("World")); // true

// 6. endsWith(searchString, length): Checks if a string ends with a specified string/characters.

let str6 = "Hello, World!";
console.log(str6.endsWith("World!")); // true

// 7. indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.

let str7 = "Hello, World!";
console.log(str7.indexOf("World")); // 7

// 8. lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string.

let str8 = "Hello, World, Hello!";
console.log(str8.lastIndexOf("Hello")); // 14

// 9. match(regex): Searches a string for a match against a regular expression and returns the matches.

let str9 = "The rain in Spain stays mainly in the plain";
console.log(str9.match(/ain/g)); // ["ain", "ain", "ain"]

// 10. replace(searchValue, newValue): Replaces a specified value with another value in a string.

let str10 = "Hello, World!";
console.log(str10.replace("World", "Universe")); // "Hello, Universe!"

// 11. search(regex): Searches a string for a specified value and returns the position of the match.

let str11 = "Hello, World!";
console.log(str11.search("World")); // 7

// 12. slice(beginIndex, endIndex): Extracts a part of a string and returns a new string.

let str12 = "Hello, World!";
console.log(str12.slice(0, 5)); // "Hello"

// 13. split(separator, limit): Splits a string into an array of substrings.

let str13 = "Hello, World!";
console.log(str13.split(", ")); // ["Hello", "World!"]

// 14. startsWith(searchString, position): Checks if a string starts with a specified string/characters.

let str14 = "Hello, World!";
console.log(str14.startsWith("Hello")); // true

// 15. substring(startIndex, endIndex): Extracts characters from a string between two specified indices.

let str15 = "Hello, World!";
console.log(str15.substring(0, 5)); // "Hello"

// 16. toLowerCase(): Converts a string to lowercase letters.

let str16 = "Hello, World!";
console.log(str16.toLowerCase()); // "hello, world!"

// 17. toUpperCase(): Converts a string to uppercase letters.

let str17 = "Hello, World!";
console.log(str17.toUpperCase()); // "HELLO, WORLD!"

// 18. trim(): Removes whitespace from both ends of a string.

let str18 = "   Hello, World!   ";
console.log(str18.trim()); // "Hello, World!"

// 19. trimStart() / trimEnd(): Removes whitespace only from the start or end of a string, respectively.

let str19 = "   Hello, World!   ";
console.log(str19.trimStart()); // "Hello, World!   "
console.log(str19.trimEnd()); // "   Hello, World!"

// 20. repeat(count): Returns a new string with a specified number of copies of an existing string.

let str20 = "Hello";
console.log(str20.repeat(3)); // "HelloHelloHello"

// 21. padStart(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.

let str21 = "5";
console.log(str21.padStart(3, "0")); // "005"

// 22. padEnd(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.

let str22 = "5";
console.log(str22.padEnd(3, "0")); // "500"

