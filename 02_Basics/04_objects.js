// Non Singleton object
const tinderuser = {}
console.log(tinderuser)
tinderuser.id = "123abc"
tinderuser.name = "Nivesh"
tinderuser.isLoggedIn = false
console.log(tinderuser)


// Singleton object
const tinderUser = new Object()
console.log(tinderUser);


const regularUser = {
    email : "niveshsoni@chaiGPT.com",
    fullname:{
        userFullName : {
            firstname: "Nivesh",
            lastname: "Soni"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstname + regularUser.fullname.userFullName.lastname)



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// first way 
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//second way
const obj3 = {...obj1, ...obj2}
console.log(obj3)


// .............. arrays of object ...........

const users = [
    {
        id:"1",
        email:"h@gmail.com"
    },
    {
        id:"2",
        email:"n@gmail.com"
    },
    {
        id:"3",
        email:"s@gmail.com"
    }
]


console.log(users[1].email)


console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))


console.log(tinderuser.hasOwnProperty("isLoggedIn"))
console.log(tinderuser.hasOwnProperty("isLoggedI"))