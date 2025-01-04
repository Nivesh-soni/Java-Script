// object literals

// Object.create this a constructor method by which created a singleton object

const mySym = Symbol("key1")

const jsUser = {
    name: "Nivesh",
    "full name": "Nivesh Soni",
    [mySym]: "mykey1",
    age: 18,
    email: "niveshsoni@google.com",
    location: "ratlam",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])//Right wat to access an object


console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])


jsUser.age = 19
// Object.freeze(jsUser)
jsUser.location = "Indore"
console.log(jsUser)


jsUser.greeting = function()
{
    console.log("Hello")
}


jsUser.greeting2 = function()
{
    console.log(`Hello ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())