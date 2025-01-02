const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNum = 23.9666
console.log(otherNum.toPrecision(4))

const hundi = 1000000000
console.log(hundi.toLocaleString('en-in'))


// .................... MATHS .....................

console.log(Math) //obj
console.log(Math.abs(-4)) //Absolute value (4) neg removed
console.log(Math.round(3.8)) // For Day to day life value (4)
console.log(Math.ceil(5.8)) // For high value (6)
console.log(Math.floor(5.8)) //For low value (5)
console.log(Math.min(1,-50,8,65,54,38,810,5)) //For finding Minimum value
console.log(Math.max(1,8,65,54,38,810,5)) //For finding Max value

console.log(Math.random()) // can be 0 and 1 and it become always b/w 1 and 0
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

// Dice code
console.log("Dice code")
const min = 1 
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1))+min)