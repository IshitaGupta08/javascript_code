// Immediately Invoked Function Expression (IIFE)
// jab hame kisi function ko immediately run karana hota h tab hum ye use karte h 
// aur hame global variable bhe pareshan na kare isliye bhe hum inka use karte h

// global scope ke pollution se problem hoti h kai bar use hatane ke liye hum iife ka use karte h
// syntax = ()() isme hum function aur function call dono ko () isme wrap kar denge

// function chai (){
//     console.log(`DB connectivity`);
// }
// chai()

 // ab ye problem nhi karega

(function chai (){
    // ise hum named iife bhe bolte h
    console.log(`DB connectivity`);
})();  // yaha ; lagana imp h jab hum ek se jada function ya arrow function ya 2 iife ek saath use karege
//  with arrow function
// ise hum simple iife bolte h
(() => {
    console.log(`DB connectivity two`);
}) ()

//  isme hum parameter aur argument bhe pass kar sakte h
// ((name) => {
//     console.log(`DB connectivity two ${name}`);
// }) ("ishita")
