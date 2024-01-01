//Dates

let myDate = new Date()
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);
// js me months normally 0 se start hota h aor agar indian ya yymmdd ke aacording hum 01 se months satrt karte h
// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23,5,3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")


// console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());