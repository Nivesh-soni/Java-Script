const user = 
{
    username:"Nivesh",
    fee:999,
    welcomeMsg: function()
    {
        console.log(`${this.username}, Welcome to Website`) // This key-word refer current context
        console.log(this)
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()

console.log(this)

// We can not use this key-word inside the function that is why we use arrow function
// function chai()
// {
//     let username = "Nivesh"
//     console.log(this.username)
// }

// chai()

// const chai = function()
// {
//     let username = "Nivesh"
//     console.log(this.username)
// }

// chai()


// .................. Arrow Functions ..................
const chai = () => 
{
    let username = "Nivesh"
    console.log(this)
}
chai()

// 1
// const addTwo = (num1,num2) =>
// {
//     return num1 + num2
// }



//2
// const addTwo = (num1,num2) => num1 + num2



//3
// const addTwo = (num1,num2) => (num1 + num2)



//4
const addTwo = (num1,num2) => ({username:"Nivesh"})


console.log(addTwo(1,2))


const myArray = [2, 5, 3, 7 , 8]


//1
// myArray.forEach(function () {})


//2
// myArray.forEach(() => {})