//array

const myarray = [1,2,3,4,5]
console.log(myarray[1]);

const myarray2 = [2,3,4,6,9]
console.log(myarray2);
const heros = ["shaktiman","doremaon","chota bheem"]
console.log(heros);

// methods in array

// myarray.push(6)
// myarray.push(7)
// myarray.push(8)
// myarray.pop()
// myarray.unshift(9)
// myarray.shift()
console.log(myarray.includes(8));
console.log(myarray.indexOf(4));

const newarray = myarray.join()
console.log(myarray);
console.log(typeof newarray);

// slice splice

console.log("A", myarray);

// slice
const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B", myarray);
// splice
const myn2 = myarray.splice(1,3)
console.log(myn2);
console.log("C",myarray);

const marvelheros = ["thor", "ironman","spiderman"]
const dc =["suerman", "flash","batman"]
// marvelheros.push(dc)
// console.log(marvelheros);
// push hamare array ko merge nhi karta ek new ke jaise add kar deta h
const allheros = marvelheros.concat(dc)
console.log(allheros);
// concat ke liye new variable banana hota h push ke liye need nhi h

// spread operator bhe string ko add kar deta h ise hum ... se denote karte h ye hamara jada use hota h as compare to concat 
// concat me hum bss 2 he array ko add kar sakte h isme hum 2 se jada bhe add kar sakte h easily
// ise bhe hame new variable me add karna padega
const new_hero = [...marvelheros, ...dc]
console.log(new_hero);

// ab agar array ke ander bohot sare array h to use hum flat ke help se hata sakte h usme uski depth likh kar 
const another_array =  [1,2,3,[4,5,6],7,[6,7,9,[1,2,3]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// isse hum puch rahe h ke kya ye array h
console.log(Array.isArray("Ishita"));
// yaha hum ise array me convert karege uski liye hum from ka use karte h
console.log(Array.from("Ishita"));
console.log(Array.from({name : "Ishita"}));// ye ek intresting case h isme ye hame empty array dega

// variable ko array me conver karege
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

