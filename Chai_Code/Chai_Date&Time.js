let cDate = new Date()

console.log(cDate)
console.log(typeof(cDate))
console.log(cDate.toString())

console.log(cDate.toDateString())  // Sun Mar 24 2024
console.log(cDate.toISOString())   // 2024-03-24T05:48:19.145Z
console.log(cDate.toLocaleString())   // 24/3/2024, 11:18:19 am

let myNewDate = new Date(2024, 0, 23, 12, 45)   // month index starts from 0
let myNewDate2 = new Date("2024-01-23")   // month index starts from 1 if in String
console.log(myNewDate.toDateString())   // Tue Jan 23 2024
console.log(myNewDate2.toDateString())  // Tue Jan 23 2024

let myTimeNow = Date.now() 
console.log(myTimeNow)
console.log(myNewDate.getTime())

console.log(`Time: ${cDate.getHours()} : ${cDate.getMinutes()} : ${cDate.getSeconds()}`)    // Time: 12 : 0 : 6
console.log(`Date: ${cDate.getFullYear()} : ${cDate.getMonth() + 1} : ${cDate.getDate()} : ${cDate.getDay().toLocaleString()}`) // Date: 2024 : 2 : 24 : 0
