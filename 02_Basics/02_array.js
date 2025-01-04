const marvel_heros =["Thor","Iron-man","Spider-man"]
const dc_heros =["Super-Man", "Bat-man", "Deadpool"]
//$$$$$$$$$$$$$$  push  $$$$$$$$$$$$$$$
//marvel_heros.push(dc_heros) //It is not a good practice
// console.log("1 ",marvel_heros)
//because its output is this ->
// [
//     'Thor',
//     'Iron-man',
//     'Spider-man',
//     [ 'Super-Man', 'Bat-man', 'Deadpool' ]
//   ]

// $$$$$$$$$$$$$$  concat  $$$$$$$$$$$$$$ 


// const newarr2 = marvel_heros.concat(dc_heros) //concat merge two or more arrays and return new array
// console.log("2 ", newarr2)

//$$$$$$$$$$$$$$$$$  spred  $$$$$$$$$$$$$$$$$$$$
//it means spred the elements of arrays
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);


// $$$$$$$$$$$$$$$ flat $$$$$$$$$$$$$$$
//used to concat all sub-arrays
//return a new array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const my_another_array = another_array.flat(Infinity)
console.log(my_another_array)


console.log(Array.isArray("Nivesh")) // to check given data is array or not
console.log(Array.from("Nivesh")) // to convert any kind of data to array

console.log(Array.from({name: "Nivesh"})) //imp


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //of is used to create arrays from elements