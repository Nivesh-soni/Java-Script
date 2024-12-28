//1
// Primitive
//7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


let name = "Nivesh Soni"
let age = 18
let isLoggedIn= false
let pi = 3.14
const id = Symbol('123')
const Id = Symbol('123')
let score
console.log(id===Id);

const bigNumber = 16548643516516518416513513616865048676840684n

console.log(typeof bigNumber);


// 2
// Non Primitive (Reference)
// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"]

let myObj = {
    name: "Nivesh", 
    age : 18,
}

const myFunction = function()
{
    console.log("Namaste Duniya");
}

console.log(myFunction())