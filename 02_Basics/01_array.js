// array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktian","nagraj"]

const myArr2 = new Array (1,2,3,4,)
console.log(myArr[1])

// Array method
myArr.push(6)
myArr.push(10)
myArr.pop()

//myArr.unshift(9) //Insert values in starting but it consume more time 

// myArr.shift()
// myArr.shift() // It is use to remove value which is present on  index 0


console.log(myArr)

console.log(myArr.includes(9)) //by this method we can find any element present in array or not 

console.log(myArr.indexOf(5)) //we can find index of any element which is present in the array

const newArr = myArr.join() // join method convert object into string

console.log(myArr)
console.log(newArr)

// .......... slice and splice ...........

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ",myArr)


const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)