// objects 2 types ke hote h 
// 1 literals 2 constructor
// singleton hamesha constructor se bante h literals se nhi bante 

// objects literals

// decleration of symbols
const mysym1 = Symbol("key1") // ise object me access karne ke liye hame [] ka use karna he hota h warna ye as a string treat hote h

const Jsuser = {
    name : "Ishita",
    "full name" : "Ishita Gupta",
    age : 18,
    [mysym1] : "key1",
    email : "ishita@134",
    location : "moradabad",
    iaLoggedIn : false,
    lastLoggedInDays : ["Monday","Saturday"]
}
// objects ko access karne ke 2 ways hote h 1 to dot . se 2 hum ["email"] square bracket me " "laga ke access kar sakte h
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);// ise aap . se biklu bhe access nhi kar sakte is hume aise he karna hota h

// hum = ke help se kisi bhe key ke value hange kar sakte h 
Jsuser.email = "ishu@google.com"
console.log(Jsuser.email);
// hum objects ko freeze bhe kar sakte h object pe freeze laga ke isse koi uski value change nhi kar sakta
// Object.freeze(Jsuser)
console.log(Jsuser);

// objects ke ander function bhe define kar sakte h hum
Jsuser.greeting = function(){
    console.log("good morning");
}
Jsuser.greetingTwo = function(){
    console.log(`hello jsuser ${this.name}`);       //string interpulation yaha hum name ko reference le rahe h
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());



