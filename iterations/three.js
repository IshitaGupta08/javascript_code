// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const name = ["i","s","h","u"]
for (const val of name) {
    // console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}

// +++++++++++++++++  MAPS ++++++++++++++++++++
// ye ek objects hota h jime key value ke pair hote h objects ke jaise par wo unique hote h duplicate nhi hote
const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map);
// for (const key of map) {          isse hame values array ke form me mil jaegi
//     console.log(key);
// }

for (const [key , value] of map) {
    console.log(key, ':-', value);        // isse hame keys sur value alag alag milega 
}


const myObject = {
    game1 : 'ludo',
    game2 : 'carrom'
}
// objects ke liye hum for of loop use nhi kar sakte ye objects ke liye iteratible nhi hote h

// for (const [key , value] of myObject) {
//     console.log(key, ':-', value);        
// }
