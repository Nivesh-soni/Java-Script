const myDate = new Date()
console.log(myDate.toString())
console.table([myDate.toDateString(),myDate.toISOString(),myDate.toJSON(),myDate.toLocaleDateString(),myDate.toLocaleString(),myDate.toUTCString()])

console.log(typeof myDate)

let myCreatedDate = new Date(1980,1,29)
console.log(myCreatedDate.toDateString())