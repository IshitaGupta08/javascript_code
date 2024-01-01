// filters ka use karke hum value me condition laga ke uske acc print kara sakte h


// const coading = ["java","python","ruby","cpp","js"]

// const values = coading.forEach(  (items) =>{
//     console.log(items);
//     return items
// })
// console.log(values);

// yaha for each loop me values return nhi hoti

const myNum = [1,2,3,4,5,6,7,8,9,10]
// filter value return karta h jaise for each nhi karta tha par isme hame arrow function ke baad condition lagani hoti h
const newNums = myNum.filter(  (num) => {
   return num>4
} )             // jab hum {} lagate h to hame return keyword ikhna he hota h warna values return nhi hoti h
// console.log(newNums);


const books = [{title : 'book one', genre : 'Friction', publish :1981, edition : 2004},
{title : 'book two', genre : 'Non-Friction', publish :1980, edition : 2002},
{title : 'book three', genre : 'History', publish :1984, edition : 2008},
{title : 'book four', genre : 'Science', publish :1988, edition : 2009}]

let userbook = books.filter( (bk) => bk.genre === 'History')
userbook = books.filter( (bk) => { 
    return bk.publish >= 1980 && bk.genre === 'History'
})

console.log(userbook);