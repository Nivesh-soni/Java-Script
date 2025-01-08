// for loop

// for(let i=0 ; i <= 10 ; i++)
// {
//     const element = i
//     if(element==5)
//     {
//         console.log(`5 is a best number`)
//     }
//     console.log(element)
// }


// for (let i = 1; i <= 10; i++) 
// {
//     console.log(`Outer loop ${i}`)
//     for(let j = 1; j <= 10; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

let myArray = ["Flash", "Batman", "SuperMan", "Krish"]
console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];  
    console.log(element)
}


// Break and Continue

// for(i=1; i<21; i++)
// {
//     if(i == 5)
//         {
//             console.log("5 detected")
//             break
//         }
//     console.log(i)
// }
for(i=1; i<21; i++)
{
    if(i == 5)
        {
            console.log("5 detected")
            continue
        }
    console.log(i)
}