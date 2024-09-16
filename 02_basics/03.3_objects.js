// node /workspaces/JS-by-chai_aur_Code/02_basics/03.3_Objects2.js


// Destructure Object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// one way to print
console.log(course.courseInstructor); // hitesh

// better way to print
const{courseInstructor} = course
console.log(courseInstructor) // hitesh


// destructure
const{courseInstructor: instructor} = course
console.log(instructor) // // hitesh

/* ex:
const navbar = ({company}) => {
    
    }

navbar(company = "hitesh")

// here {} means there is destructuring the object
*/



/*
// json

{
    "name": "Raj",
    "coursename": "Js",
    "price": "free"
}


[
    {},
    {},
    {}
]
*/





































































