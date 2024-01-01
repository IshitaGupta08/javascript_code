// object constructor


// ye ek singleton object h ise hum aisi he define karte h 
// const tinderuser = new Object()    

// ye ek non singleton object h or ye ek object literal h
const tinderuser = {}
tinderuser.name = "Ishita"
tinderuser.id = "123abc"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

// nesting of objects
const regularuser = {
    email : "some@123",
    fullname : {
        username : {
            firstname : "ishita",
            lastname : "gupta"
        }
    }

}
// console.log(regularuser.fullname);

// now we are adding the two objects

const obj1 = {1:"a", 2: "b", 3: "c"}
const obj2 = {4:"a", 5: "b", 6: "c"}

// const obj3 = {obj1, obj2}      aisi karege to wo he array wali problem aaegi isliye hum ise aisi nhi karte
// const obj3 =Object.assign({}, obj1,obj2)  
// exactly jaisa hum ne likha h waise he likjne ke liye hum object.assign ka use karte h or () me wk {} black bhe lagate h default ke liye isse hum kitni bhe value add kar sakte h


// aur hum objects ko add karne ke liye spread wala syntax bhe use karte h mostly ...
const obj3 ={...obj1,...obj2}
// console.log(obj3);

// aise kar ke hum array ke ander object define kar sakte h
const user = [
    {
        name : "ishita",
        email :"ishu@314"
    },
    {
        name : "ishita",
        email :"ishu@314"
    },
    {
        name : "ishita",
        email :"ishu@314"
    },
]
//  hum normal object ke keys ya value ko bhe print kara sakte h ya phir sari keys values ko ek saath array ke form me print kara sakte h
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));












