// // if 

// const isUserLoggedIn = true
// if(isUserLoggedIn)
// {
//     console.log(`logged in`)
// }

// if( 2 === "2")
// {
//     console.log(`Yes`)
// }
// else 
// {
//     console.log(`No`)
// }

// const score = 200

// if( score > 100)
// {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// const balance = 1000

// // if(balance > 500) console.log(`test`)


// if ( balance < 500)
// {
//     console.log(`less than 1000`)
// }

// else if( balance < 750)
// {
//     console.log(`less than 1000`)
// }

// else if( balance < 900)
// {
//     console.log(`less than 1000`)
// }

// else
// {
//     console.log(`less than 1200`)
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) 
{
    console.log(`Allowed`)
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log(`Logged In`)
}