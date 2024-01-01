// reduce ka use karke hum values ko add kar sakte(acculumator aor current value likh kar)phir 0 se initilize kara kar

const myNum = [1,2,3]

// const Total = myNum.reduce( function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)          // yaha hum acc ke value 0 se initlize karaege

const Total = myNum.reduce( (acc,currval) => acc+currval,0)
console.log(Total);