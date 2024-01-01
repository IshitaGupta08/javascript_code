// let score = 33
// let score = "33abc"
// let score = null
// let score = undefined
let score = true
console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

//"33" => 33 
// "33abc" => NaN
// true = 1 , false = 0
// null = 0
// undefined = NaN

// let isLoggedIn = 1
// let isLoggedIn ="ishita"
let isLoggedIn = ""


let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// conversion in boolean
//1 => true , 0 =>false
// "" => false , "ishita"=> true

let somenumber = 88

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/***********************operation************************** */

// to print negative value we use negValue
let value = 3

let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // ye hum power ke liye use karte h

// how to add string

let str1 = "hello"

let str2 = " ishita"
let str3 = str1 + str2
console.log(str3);