//1
const name = "Nivesh"
const repoCount = 1
// console.log(name + repoCount + y.toUpperCase() ); we don't use this type of syntax
//2
console.log(`Hello !! My name is ${name}. My repoCount is ${repoCount}`) //string interpolletion
//3
const gameName = new String('Nivesh-soni')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(4, -2)
console.log(anotherString)

const newString1 = "     Nivesh   Soni       "
console.log(newString1)
console.log(newString1.trim())

const url = "https://nivesh.com//nivesh%20soni"

console.log(url)
console.log(url.replace('%20','-'))

console.log(url.includes('soni'))
console.log(url.includes('noob'))

const gameName1 = new String('Nivesh-soni-Pro-Pencil-art')

console.log(gameName1.split("-"))
