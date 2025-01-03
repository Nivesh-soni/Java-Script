const myDate = new Date()
console.log(myDate.toString())
console.table([myDate.toDateString(),myDate.toISOString(),myDate.toJSON(),myDate.toLocaleDateString(),myDate.toLocaleString(),myDate.toUTCString()])

console.log(typeof myDate)

let myCreatedDate = new Date(1980,1,29)
console.log(myCreatedDate.toDateString())

let lDate = new Date(2005,0,25,5,3)
console.log(lDate.toLocaleString())

let sDate = new Date(2005,0,25)
console.log(sDate.toDateString())

let nivDate = new Date("2005-1-25")
console.log(nivDate.toLocaleString())


// ................. Time Stamp .................

let myTimeStamp = Date.now()
console.log(myTimeStamp)