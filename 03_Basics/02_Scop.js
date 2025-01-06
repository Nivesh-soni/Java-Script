// var c = 300
let a = 300
if(true)
{
    let a = 10
    const b = 20
    console.log(a)
}


console.log(a)
// console.log(b)
// console.log(c)


function one()
{
    const username = "Nivesh soni"

    function two()
    {
        const web = "Youtube"
        console.log(username)
    }
    
    // console.log(web)

    two()
}

one() 

if(true)
{
    const username = "Nivesh soni"
    if(username === "Nivesh soni")
    {
        const web = " Insta "
        console.log(username + web)
    }
    // console.log(web)
    console.log(username)
}
// console.log(username)

// .............  Interesting  .............

console.log(addOne(5))
function addOne(num)
{
    return num + 1
}


const addTwo = function(num)
{
    return num + 2
}
console.log(addTwo(5))
