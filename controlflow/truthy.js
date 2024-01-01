// const userEmail = "ishu@75.com"
// const userEmail = ""     //ise hum empty assue kar lete h
// const userEmail = []   // ise hu full assume kar lete h
// if(userEmail){
//     console.log("Got the Email");
// }
// else{
//     console.log("Email not found");
// }

// falsy values        jisse hum false consider karte h iske alawa sab true hota h
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// iske alawa sab true hota h

// truthy values
// "0",  " ", 'false', {} , [], function(){}   ye sab shocking truthy value h
// "" ek bar string me jo bhe aa jae to wo truthy value hoti h empty function or empty object bhe true hota h

//empty array ko check karne ka kya way hota h

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }
// else{
//     console.log("not empty");
// }

const emptyobj = {}

// isme hum directly object ko call karege Object se phir iske value ko array me lene ke liye hum .key() ka use karege 
// jab ye array ban jaega to isme hum array ke length wali property se length check karege ke empty to nhi h
// ()key ke isme hum jo uper variable define kara h use likhte h
// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
// }


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10     // isme ye 1 value ko print karega by default
// val1 = null ?? 10     // jab hame null ya undefined hoga to wo function ho ya koi normal value use execute karega
val1 = undefined ?? 15
console.log(val1);

//  nullish or ternary operator dono alag alag h same nhi h
// ternary operator

// conndition ? true : false      ye iska syntax h

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80");
