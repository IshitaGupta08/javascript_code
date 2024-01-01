
function saymyname (){
    // console.log("I");
    // console.log("S");
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("A");
}
saymyname();

// function addTwoNumbers (num1,num2){ //these are called parameters
//     console.log(num1+num2);
// }
// addTwoNumbers(3,5);

function addTwoNumbers (num1,num2){ //these are called parameters
    // let result = num1 + num2
    // return result
    // console.log("ishita"); // return ke baad kuch bhe print nhi hota h
    return num1 + num2
}
const result = addTwoNumbers(3,5); //these are called arguments
// console.log("Result", result);

function loginUserMessage (username){
    if(username === undefined){
        console.log("Please enter the username");
        return
// ab ye neeche wale ko return karega
    }
    // is wali condition ko rokne ke liye hum if me he return laga dete h
    return `${username} islogged in` //return value return karta h print nhi karata output me 
}
//loginUserMessage("Ishita") // abhi koi output nhi aaega kyui abhi hum ne koi value print nhi karai h
//console.log(loginUserMessage("Ishita")); //ab ye value ko print karega 
//console.log(loginUserMessage("")); // jab empty string dete h to bss normal message print hota h bss
console.log(loginUserMessage()); // jab hum kuch nhi dete to undefined aata h message ke saath


// hum undefined ke condition ko if wagera se bhe check kar sakte h


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500,2000)); //itni sari value ko access karne ke liye hum rest ya spread operator lagaye
//rest ya spread operator se ye sab array ke form me aaega

// function ke aner object ko kaise handle karte h
const user = {
    name : "ishita",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user) yaha hume wo he name likhna hota h jo us object ka hota h 
handleObject({
    name : "ishita",
    price: 199
})

// function me array jaise use karte h

const myNewarray = [200, 300, 400, 500]

function returnSecondvalue(getarray){
    return getarray[2] //yaha hum parameter wali value likhte h 
}
// console.log(returnSecondvalue(myNewarray));
// aur hum directly bhe kar sakte h pass
console.log(returnSecondvalue([200, 300, 400, 500]));
