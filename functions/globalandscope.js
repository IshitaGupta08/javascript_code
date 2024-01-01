var c = 300 //ye global variable h

// is curly bracket ke bhar hum global varible define karte h jise hum local me execute kar sakte h
//  par local walo ko hum globally execyte nhi kar sakte
//in curly bracket ko hum scope bolte h aur iske ander hum log block of code ko execute kate h
if (true){
    let a = 10
    const b = 20
    // var c= 30  // ye bss {}iske ander he print hona chaiye bhar nhi par var ke ye he falt h ke ye bhar print ho jata h
    console.log(a);
}

// console.log(a);
// console.log(b);
console.log(c);

// nested scope
function one(){
    const usename = "ishita"

    function two (){
        const website = "youtube"
        console.log(usename);
    }
    // console.log(website);
    two()
}
one()


if (true){
    const username = "ishita"
    if (username === "ishita"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // yaha error aaegi kyuki ye if statement ke bhar h to ye execute nhi hoga
}
// console.log(username); // same ye bhe if statement ke bhar h to ye  he execute nhi hoga

       
// +++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++
addone(5)
function addone(num){
    return num +1
}
// jab hum normally function define karte h to hum use phale bhe call kar sakte h 

addtwo(6)
const addtwo = function(num){
    return num +2
}
// lekin jab hum function ko kisi variable ke ander define karte h to use hum phale call nhi kar sakte
// ise hum hosting ka process bolte h 