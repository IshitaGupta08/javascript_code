const course = {
    name : "js in hindi",
    price : "999",
    instructor : "hitesh"
}
// course.instructor       value extract karne ke liye object me 
// deconstructer ka new syntax 
const {instructor} = course 
console.log(instructor);