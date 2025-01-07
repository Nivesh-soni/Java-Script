const userEmail = "n@niveshsoni.ai"

if(userEmail)
{
    console.log(`Got user Eamil`)
}
else
{
    console.log(`Don't have Email`)
}


// ............. Falsy values ..............
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// .............. Truthy values ............
// Except these, everything else is truthy values.
// For examples : "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0)
{
    console.log(`array is empty`)
}

const mtObj = {}

if(Object.keys(mtObj).length === 0)
{
    console.log(`mtObj`)
}

// Nullish Coalescing Operator (??) null and undifind

let val1

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1)


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`)