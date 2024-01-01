const name = "ishita"
const repoCount = 50

// console.log(name + repoCount ); // ye syntax old syntax h js ka ise ab koi use nhi karta h
//  now we use the in palce of that

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("ishitagupta")
// ab hum iski key value pair ko accesss karte h
console.log(gameName[0]);
// prototype ko access hum . se karte h
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
// charAt ka use hum ye dekhne ke liye karte h ke kon se position par kon sa element h
console.log(gameName.charAt(3));
// indexof ka use hum ye dekhne ke liye karte h ke kon sa charater kon se position par h ye charat ka opposite h
console.log(gameName.indexOf('h')); 
// sclice me hum last value ko incude nhi karte isme hum bss fisrt value or jaha tak lena h waha se ek jada likhte h
// substring me hum neg value nhi dete warna wo ignore kar dete h
const newString =gameName.substring(0,4)
console.log(newString)
// slicing me hum neg value de sakta h to ye reverse order me print karega
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
// trim  hamare extra space ko remove kar deta h
const newStringOne = "    ishita    "
console.log(newStringOne);
console.log(newStringOne.trim());

// replce ka use hum url me se unwanted ko remove karne ke liye karte h
const url ="https://ishita.com/ishita%20gupta"
console.log(url.replace('%20','-'));


console.log(gameName.__proto__);