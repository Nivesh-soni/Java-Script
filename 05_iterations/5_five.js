const coding = ["js" , "python" , "ruby" , "cpp" , "c" , "java"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( ( item )=> {
//     console.log(item)
// } )

// function printMe ( item )
// {
//     console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )



const myCoding = [
    {
        laguageName : "javascript",
        laguageFileName : "js"
    },
    {
        laguageName : "java",
        laguageFileName : "java"
    },
    {
        laguageName : "c++",
        laguageFileName : "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.laguageFileName)
} )