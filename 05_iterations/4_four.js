const myObj =
{
    js: "java-script",
    cpp: "C++",
    rb: "ruby",
    py: "Python"
}


for (const key in myObj) {
    console.log(`${key} is extention of ${myObj[key]}`)
}

const programming = ["js" , "py" , "rb" , "cpp" , "c" , "java"]
for (const key in programming) {
  console.log(programming[key])
}

// const map = new Map()
// map.set('In','India')
// map.set('USA','United states of Amarica')
// map.set('Fr','France')

// for (const key in map) {
//     console.log(key)
// }
