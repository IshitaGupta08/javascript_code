// objects ke liye hamara for in loop kaam karta h for of nhi karta to objects ke liye hum ise use karege

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by app'
}
for (const key in myObject) {
    // console.log(key);     ise bss key ke liye use karte h hum mtb bss key ke values aaege
    console.log(`${key} shortcut is for ${myObject[key]}`);   //ye key ke saath value bhe print kar deta h
}


// for in loop bss key batane ke liye use hota h ye for of loop ke jaise value nhi batata
// ye array ke bhe key batata h
//   for array

const myArray = ["js","cpp","c","python" ]
for (const key in myArray) {
    // console.log(key);  ye bs  array ke index or key dega value nhi dega
    console.log(myArray[key]);   // isse hum array ke values le sakte h
}

// maps ke liye for in loop kaam nhi karta h bss for of ka use karte h for in me ye iteratable nhi hota h 