// For each variation

const myNums = [1, 2, 3, 4, 5, 6, 7 , 8, 9]
let newNums = []

// myNums.forEach((i) => {
//     if(i>5)
//     newNums.push(i)
// })
// console.log(newNums)



// filter() variation
newNums = myNums.filter( (item) => {       // write return if you are using {} scope
        return item>5
})
// (item) => (item>3)      // else use () to directly return the value
console.log(newNums)



// map() variation
newNums = myNums.map( (item) =>  (item*10))
console.log(newNums)



// Chaining 
newNums = myNums.map((i) => (i*10)).map((i) => (i/5)).filter((x) => (x%2 === 0)).map((i) => (Math.pow(i,2)))
console.log(newNums)



// reduce() variation
const red =  myNums.reduce( (acc,crvl) => (
    acc + crvl
), 0)
console.log(red)












