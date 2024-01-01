// this ka use hum current context to refer karne ke liye karte h 
// agar hum node me this ko run kare to empty aata h aur jab hum ise browser me karte h to wo window 

const user = {
    username: "ishita",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // ye this current reference dega hame hamare context ka

    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
console.log(this);   // ye empty dega kyuki global me kuch nhi h 
//  jabke jab hum ye same chiz browser mw karege to ye hame window dega kyuki browser me jo object h wo window object h


// function chai(){
//      constusername = "ishita"
//     console.log(this.username); // jb hum ise function me likhte h to ye bohot kuch internal deta h hame
// }
// chai()
// ab humne ek variable define kiya h phir usne function banay h phir this ko access kara h to wo ab bhe undefine he h
// const chai = function(){
//     constusername = "ishita"
//     console.log(this.username);

// }
// chai()



// ++++++++++++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++=

const chai = () => {
    constusername = "ishita"
    // console.log(this);   // arrpw function me this undefined hota h
}
chai()

// basic arrow function 
// () => {}
// ise hum kisi variable me bhe store kar sakte hh
// const addtwo = (num1,num2) => {
//      return num1 + num2
// }
// console.log(addtwo(5,6));
// {}iske saath return keyword likhna imp h ya compulsory h jabki () or arrow function me hame return likhna imp nhi h

//  implict return

// const addtwo = (num1,num2) => num1 + num2  //or hum num1 + num2 ko ()isme wrap kar sakte h isse hame return nhi likhna hota
// const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username : "ishita"})

console.log(addtwo(5,6))

// hamne ye () isliye lagaya h kyuki agar hame aage object return karna pada to {} ye use hoga to value undefine
// aaege isliye hum object ko bhe () isme wrap kar lenge 
