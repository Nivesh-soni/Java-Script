function sayMyName()
{
    console.log("nivesh")
}

sayMyName()

// function sum(num1,num2)
// {
//     console.log(num1 + num2)
// }

// const result = sum(2,6)

// console.log(result) // ans will be undefined because we write console not return

function sum(num1,num2)
{
    return (num1 + num2)
}

const ans = sum(1,2)
console.log(ans)


function logInMsg(username)
{
    return `${username} just logged in`
}

console.log(logInMsg("Nivesh Soni"))

// ...  these three dots are called rest operator and spred operator per inka use kaha ho raha hai us per depend hai inka behavior
function calculateCartPrice(val1, val2, ...num1)
{
    console.log(val1)
    console.log(val2)
    return num1
}
console.log(calculateCartPrice(200, 3000,65454,654,6,44,66,645))


const user = {
    userName:"Nivesh Soni",
    price:199
}

function handleObject(anyObject)
{
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
}

//1
// handleObject(user)

//2
handleObject({userName:"JADU",
    price:299
})


const myNewArr = [200,400,600,480]

function secondValue(getArray)
{
    return getArray[1]
}


//1
// console.log(secondValue(myNewArr))

//2
console.log(secondValue([200,800,605,9064,10]))