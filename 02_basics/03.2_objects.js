// run code: node 02_basics/03.2_objects.js


// singleton object

// const flipkartUser1 = new Object()

// console.log(flipkartUser1); // {} - empty object

// Non-singleton object

// const flipkartUser2 = new Object()

// console.log(flipkartUser2); // {} - empty object




const flipkartUser3 = new Object()

flipkartUser3.id ="123abc"
flipkartUser3.name ="Raj"
flipkartUser3.isLoggedIn = false

// console.log(flipkartUser3); // { id: '123abc', name: 'Raj', isLoggedIn: false }


const regularUser = {
    email: "raj43@gmail.com",
    fullname: {
        usersfullname: {
            firstname: "Ritu",
            lastname: "Raj"
        } 
    }
}

console.log(regularUser.fullname); // { usersfullname: { firstname: 'Ritu', lastname: 'Raj' } }
console.log(regularUser.fullname.usersfullname); // { firstname: 'Ritu', lastname: 'Raj' }
console.log(regularUser.fullname.usersfullname.firstname); // Ritu

// suppose if there is no full name then use ?
console.log(regularUser.fullname?.usersfullname);



// combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// 1. following syntax stores object inside object so not the right way
const obj3 = {obj1, obj2} // combine objects like arrays
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }



// 2. following syntax stores sources arrays into target means obj2 into obj1 
/*
const target = {1: "a", 2: "b"}
const source = {3: "c", 4: "d"}
const returnedTarget = object.assign(target, source);
*/
const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// 3. following syntax creates new array and store all the objects in that
/*
const source1 = {1: "a", 2: "b"}
const source2 = {3: "c", 4: "d"}
const source3 = {3: "c", 4: "d"}
const returnedTarget = object.assign({}, source1, source2, source3); 
// here {} is the target which stores al three
*/
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




// 4. better of all
const obj6 = {...obj1, ...obj2}
console.log(obj6)



// while working with databse
// multiple object inside an array

const users = [
    {
        id: 1,
        email: "1hogmail.com"
    },
    {
        id: 2,
        email: "2hogmail.com"
    },
    {
        id: 3,
        email: "3hogmail.com"
    },
    {
        id: 4,
        email: "4hogmail.com"
    }
]

users[1].email
console.log(flipkartUser3);

// console.log(Objects.keys(flipkartUser3)); // ['id', 'name', 'isLoggedIn']
// console.log(Objects.Values(flipkartUser3)); // ['123abc', 'Raj', 'false']
// console.log(Objects.entries(flipkartUser3)); // [['key', 'value'], ['key', 'value'], ['key', 'value']]
// console.log(flipkartUser3.hasOwnProperty('isLoggedIn')); // True
// console.log(flipkartUser3.hasOwnProperty('isLogged')); // false













